/* Possíveis métodos dentro de um controller:
 index, show, update, store, destroy.

 index: listagem de sessões.
 store: criar uma sessão.
 show: mostrar uma unica sessão.
 update: atualizar uma sessão.
 destroy; quando queremos deletar uma sessão.
 */

import User from "../models/User.js";
import * as Yup from 'yup'

class SessionController {

  async store(req, res) {
    
    const schema  = Yup.object().shape({
      email: Yup.string().email().required()
    });

    const {email} = req.body;

    if(! (await schema.isValid(req.body))){
      return res.status(400).json({error: 'Email inválido.'});
    }

    //verifica se o usuario ja existe.
    let user =  await User.findOne({email});

    //se o usuario não existir ele cria um novo.
    if(!user){
      user = await User.create({email});
    }

    return res.json(user);
  }

}

export default new SessionController();