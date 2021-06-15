import { Injectable } from '@nestjs/common';
var jwt = require('jsonwebtoken');
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

const users = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "Roberto",
    password: "123456",
  }
]

const tokenBlacklist = [];

const KEY = "9SY&VHeyvAz*RVt@p8vt";

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {

    if(users.findIndex(user => user.username === createUserDto.username)){
      return 'Já existe esse usuário'
    }

    users.push(createUserDto)
    return createUserDto;
  }

  findAll() {

    return users;
  }

  findOne(username: string) {

    const user = users.findIndex(user=> user.username === username);

    return users[user]  || 'Não encontrado';
  }

  update(username: string, updateUserDto: UpdateUserDto) {

    const user = users.findIndex(user => user.username === username);

    if(user >= 0) {

      users[user] = updateUserDto;
      return users[user];
    }

    return 'Não encontrado';
  }

  remove(username: string) {

    const user = users.findIndex(user => user.username === username);
    if(user >= 0) {
    
      users.splice(user, 1);
      return `This action removes a #${username} user`;
    }

    return 'Não encontrado';
  }

  login(user: User) {

    const userFound = users.findIndex(mapedUser => mapedUser.username === user.username);

    if (userFound && users[userFound]?.password === user.password) {
      //token é valido por 1 minuto
      const token = jwt.sign({ _id: user.username }, KEY, { expiresIn: 300 });
      return `bearer ${token}`;
    }
    return "";
  }

  logout(authorization: any) {

    const token = authorization.authorization?.split(" ")[1];

    if (token) tokenBlacklist.push(token);
  }

  validate(authorization: any) {

    const token = authorization.authorization?.split(" ")[1];

    if (tokenBlacklist.includes(token))
      return "Token Invalido";

    try {
      jwt.verify(token, KEY);
      return "Token OK";
    } catch (err) {
      return "Token Expirado";
    }
  }
}
