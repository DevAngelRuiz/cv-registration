import { Option } from "../types/Option";
import perfil from '../assets/perfil.png'
import professional from '../assets/professional.png'
import skillsImg from '../assets/skills-img.png'
import contact from '../assets/contact.png'

export const options: Option[] =[
    { id: 1, title: 'Pessoal', subtitle: 'Informações pessoais', icon: perfil, path: '/pessoal'},
    { id: 2, title: 'Profissional', subtitle: 'Senoridade', icon: professional, path: '/profissional'},
    { id: 3, title: 'Skills', subtitle: 'Fale sobre suas Skills', icon: skillsImg, path: '/skills'},
    { id: 4, title: 'Contato', subtitle: 'Como te localizamos', icon: contact, path: '/contato'},
]