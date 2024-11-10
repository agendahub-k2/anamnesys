import React from "react";
import { Link } from "react-router-dom";
import { SizeBox, Size, Background, CButton } from "../styles/LoginAndRegister/styles";
import { IconButton } from "../components/IconButton/IconButton";
import { Input2 } from "../components/Input2/Input2";
import { Button1 } from "../components/Button1/Button1";

// Imagens e ícones
import logo1 from "../Assets/img/logo/logo_1.png"; 
import iconBack from "../Assets/img/icons/filled/back_filled.png";
import faceIcon from "../Assets/img/icons/outline/face_id.png";
import phoneIcon from "../Assets/img/icons/outline/phone.png";
import giftIcon from "../Assets/img/icons/outline/gift.png";
import userIcon from "../Assets/img/icons/outline/user.png";
import passwordIcon from "../Assets/img/icons/outline/password.png";


export const Register = () => {
  return (
    <div className={Background.BACKGROUNDR}>
      <div className={`flex flex-col items-center justify-center bg-white p-8 md:p-10 rounded-2xl shadow-xl ${SizeBox.BOX_R}`}>
        
        {/* Seção do botão voltar */}
        <section className="w-full flex px-[12px]">
          <div className="py-[12px]">
            <Link to="/">
              <IconButton
                id="iconBack"
                image={iconBack}
                style={{ width: '3vh', height: '3vh', maxWidth: '30px', maxHeight: '30px' }}
              />
            </Link>
          </div>
        </section>

        {/* Seção do título e logo */}
        <section className="flex flex-col justify-center items-center mb-12">
          <h1 className={`text-center ${Size.EXTRALARGE} font-[sansation-regular]`}>Criar conta</h1>
          <div className="w-[75%]">
            <img src={logo1} alt="Logo" />
          </div>
        </section>

        {/* Formulário de registro */}
        <section className="flex w-full overflow-auto">
          <form className="flex flex-col w-full">
            <section className="flex w-full">
              <div className="relative w-full space-y-7 mx-5">
                
                {/* Nome e sobrenome */}
                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
                  <div className="w-full lg:w-[45%]">
                    <Input2 type="text" id="txtNombreR" placeholder="Nome" icon={faceIcon} />
                  </div>
                  <div className="w-full lg:w-[45%]">
                    <Input2 type="text" id="txtApellidoR" placeholder="Sobre-nome" icon={faceIcon} />
                  </div>
                </div>

                {/* Telefone e data de nascimento */}
                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
                  <div className="w-full lg:w-[45%]">
                    <Input2 type="numero" id="txtTelefonoR" placeholder="Telefone" icon={phoneIcon} />
                  </div>
                  <div className="w-full lg:w-[45%]">
                    <Input2 type="date" id="txtNacimientoR" placeholder="Data de nascimento" icon={giftIcon} />
                  </div>
                </div>

                {/* Usuário e senha */}
                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
                  <div className="w-full lg:w-[45%]">
                    <Input2 type="text" id="txtUserR" placeholder="Usuario" icon={userIcon} />
                  </div>
                  <div className="w-full lg:w-[45%]">
                    <Input2 type="password" id="txtPasswordR" placeholder="Digite sua senha" icon={passwordIcon} />
                  </div>
                </div>
              </div>
            </section>

            {/* Navegação */}
            <div className="flex justify-center items-center w-full py-7 space-x-10">
              <button type="button" className="text-gray-700 text-2xl hover:bg-gray-200">❮</button>
              <button type="button" className="text-gray-700 text-2xl hover:bg-gray-200">❯</button>
            </div>

            {/* Botão de criação de conta */}
            <div className="flex justify-center w-full mb-4">
              <Button1 nombre="Crie sua conta" id="Criarconta" type="submit" color={CButton.MATE} />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
