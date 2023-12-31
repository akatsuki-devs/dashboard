import React, { useEffect } from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout'
import Image from "next/image";
import { IconEdit } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';


export default function Colaborador() {
  const [name, setName] = useState('')
  const [isNameVazio, setIsNameVazio] = useState(false)

  const [email, setEmail] = useState('')
  const [isEmailVazio, setIsEmailVazio] = useState(false)

  const [password, setPassword] = useState('')
  const [isPasswordVazio, setIsPasswordVazio] = useState(false)

  const [userType, setUserType] = useState('')
  const [isUserTypeVazio, setIsUserTypeVazio] = useState(false)

  const [employeeData, setEmployeeData] = useState([])


  // Modal de cadastro open and close
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    e.preventDefault();

    // setName('');
    // setEmail('');
    // setPassword('');
    // setUserType('');
    // setIsNameVazio(false);
    // setIsEmailVazio(false);
    // setIsPasswordVazio(false);
    // setIsUserTypeVazio(false);

    setIsOpen(false);
  };

  // modal de edição open and close
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const openModalEdit = () => {
    setIsOpenEdit(true);
  };

  const closeModalEdit = () => {
    setIsOpenEdit(false);
  };


  // tirar mensagem da VALIDAÇÃO
  const handleChange = () => {
    if (name.trim !== '') {
      setIsNameVazio(false);
    }
    if (email.trim() !== '') {
      setIsEmailVazio(false);
    }
    if (password.trim() !== '') {
      setIsPasswordVazio(false);
    }
    if (userType.trim() !== null) {
      setIsUserTypeVazio(false);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
      //VALIDAÇÃO
      if (name.trim() === '') {
        setIsNameVazio(true);
        return; // Retorna para evitar o envio do formulário
      }
      if (email.trim() === '') {
        setIsEmailVazio(true);
        return; // Retorna para evitar o envio do formulário
      }
      if (password.trim() === '') {
        setIsPasswordVazio(true);
        return; // Retorna para evitar o envio do formulário
      }
      if (userType.trim() === '') {
        setIsUserTypeVazio(true);
        return; // Retorna para evitar o envio do formulário
      }


    let url;
    if (userType === 'ADMIN') {
      url = 'http://10.107.144.05:3000/auth/signup/admin';
      console.log(url)
      const data = {
        name,
        email,
        userType,
        password,
      };


      console.log('Dados do produto: antes do fetch', { data });
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          // Trate a resposta do servidor, se necessário
          console.log('Resposta do servidor:', response);
        })
        .catch((error) => {
          console.error('Erro ao enviar a solicitação:', error);
        });

    } else if (userType === 'COLABORATOR') {
      url = 'http://localhost:3000/auth/signup/colaborator';
      console.log(url)
      const data = {
        name,
        email,
        userType,
        password,
      };
      console.log('Dados do produto: antes do fetch', { data });
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          // Trate a resposta do servidor, se necessário
          console.log('Resposta do servidor:', response);
        })
        .catch((error) => {
          console.error('Erro ao enviar a solicitação:', error);
        });
    } else {
      console.log('Escolha um tipo válido');
    }




    // Aqui você pode fazer algo com os dados do formulário, como enviá-los para o servidor

  };



  useEffect(() => {
    fetch("http://10.107.144.05:3000/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Filtrar os usuários com userType 'COLABORATOR' ou 'ADMIN'
        const filteredUsers = data.filter((user) => user.userType === 'COLABORATOR' || user.userType === 'ADMIN');

        // Definir o estado com os dados filtrados
        setEmployeeData(filteredUsers);
      })
      .catch((error) => {
        console.error("Erro ao buscar os usuários:", error);
      });
  }, []);


  return (
    <>
      <Layout>
        <div className='flex flex-col h-full bg-second'>
          <div className='flex items-center justify-center pb-6 h-1/4'>
            <div className='flex h-4/5 w-4/5 items-end '>
              <button onClick={openModal} className='h-11 w-80 rounded-md bg-primary'>
                Cadastrar colaborador
              </button>



            </div>
          </div>

          {/* table colaborador */}
          <div className='flex items-center justify-center h-full '>
            {/* <TableColaborador Type="tableColaborador" /> */}
            <div className='flex justify-center  items-center h-4/5 w-4/5 pl-16 pr-16 rounded-lg shadow-shadow-button bg-white text-text '>
              <div className='flex  justify-center h-5/6 w-full bg-white text-text'>
                {/* div da tabela */}
                <div className='w-full flex items-center justify-center'>

                  <div class=" w-full h-4/5 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                      <thead className="overflow-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='sticky top-0 bg-primary text-white'>
                          <th scope="col" className="px-6 py-3">
                            ID
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Nome
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Email
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Tipo
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Ações
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {employeeData.map((users) => (
                          <tr className=" text-sm font-medium dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                              {users.id}
                            </th>
                            <td className="px-6 py-4 ">
                              {users.name}
                            </td>
                            <td className="px-6 py-4">
                              {users.email}
                            </td>
                            <td className="px-6 py-4">
                              {users.userType}
                            </td>
                            <td className='flex px-6 py-4  gap-3 items-center justify-around'>
                              <IconEdit onClick={openModalEdit} color='#979797' width={24} height={24} />
                              <IconTrash color='#F15050' width={24} height={24} />
                            </td>
                          </tr>
                        ))}


                        {/* <tr className=" text-sm font-medium dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            1
                          </th>
                          <td className="px-6 py-4 ">
                            Beatriz Landi
                          </td>
                          <td className="px-6 py-4">
                            Beatriz.landi.coelho@gmail.com
                          </td>
                          <td className="px-6 py-4">
                            Colaborador
                          </td>
                          <td className='flex px-6 py-4  gap-3 items-center justify-around'>
                            <IconEdit onClick={openModalEdit} color='#979797' width={24} height={24} />
                            <IconTrash color='#F15050' width={24} height={24} />
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>

          </div>
          {/* Modal de cadastro */}
          {isOpen && (
            <div className="bg-gradient fixed inset-0 flex items-center justify-center z-50">
              <div className="grid modal-container rounded-lg p-4 w-[680px] h-fit text-text bg-white">
                <div className=" modal-content  p-4 rounded-xl">
                  <h2 className="text-xl font-bold my-4">Cadastrar novo colaborador</h2>
                  <form className="fle flex-col justify-between">
                    <div className='mb-2'>
                      <label className="" htmlFor="campo">Nome do colaborador</label>
                      <div className="pt-1">
                        <input
                          type="text"
                          placeholder="Nome do colaborador"
                          id="email"
                          className="border rounded-lg border-gray p-2  w-full"
                          onChange={(e) => {
                            setName(e.target.value);
                            handleChange();
                          }}

                        />
                      </div>
                      {isNameVazio && <span style={{ color: 'red' }}>Por favor, preencha o nome do colaborador</span>}
                    </div>

                    <div className='mb-2'>
                      <label htmlFor="campo">Email do colaborador</label>
                      <div className="pt-1">
                        <input
                          type="text"
                          placeholder="Email do colaborador"
                          id="dinheiro"
                          className="border rounded-lg border-gray p-2  w-full"
                          onChange={(e) => {
                            setEmail(e.target.value)
                            handleChange();
                          }}

                        />
                      </div>
                      {isEmailVazio && <span style={{ color: 'red' }}>Por favor, preencha o email do colaborador</span>}
                    </div>

                    <div className='mb-2'>
                      <label className="" htmlFor="campo">Senha</label>
                      <div className="pt-1">
                        <input
                          type="password"
                          placeholder="Senha"
                          id="email"
                          className="border rounded-lg border-gray p-2 w-full"
                          onChange={(e) => {
                            setPassword(e.target.value)
                            handleChange();
                          }}

                        />
                      </div>
                      {isPasswordVazio && <span style={{ color: 'red' }}>Por favor, preencha a senha do colaborador</span>}
                    </div>

                    <div className='mb-2'>
                      <label htmlFor="campo">Tipo do colaborador</label>
                      <div className="pt-1">
                        <div class="relative inline-flex h-11 w-2/5">
                          <select class="appearance-none bg-white border border-gray rounded-md min-w-full pl-3 pr-10  py-2 focus:outline-none focus:ring focus:border-blue-500 sm:text-sm"
                            onChange={(e) => {
                              setUserType(e.target.value)
                              handleChange();
                            }}
                            value={userType}
                          >                           <option>Selecionar</option>

                            <option>ADMIN</option>
                            <option>COLABORATOR</option>

                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </div>
                        </div>
                      </div>
                      {isUserTypeVazio && <span style={{ color: 'red' }}>Por favor, preencha o tipo do colaborador</span>}
                    </div>

                    <div className="flex justify-end h-16 gap-4 ">
                      <button
                        onClick={closeModal}
                        className="border text-text h-11 py-2 px-4 rounded ">
                        Cancelar
                      </button>
                      <button
                        onClick={handleSubmit}

                        type="submit"
                        className="bg-primary border-text border h-11 text-white py-2 px-4 rounded">
                        Confirmar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Modal de edição */}
          {isOpenEdit && (
            <div className="bg-gradient fixed inset-0 flex items-center justify-center z-50">
              <div className="grid modal-container rounded-lg p-4 w-[680px] h-fit text-text bg-white">
                <div className=" modal-content  p-4 rounded-xl">
                  <h2 className="text-xl font-bold my-4">Editar colaborador</h2>
                  <form className="fle flex-col justify-between">
                    <div>
                      <label className="" htmlFor="campo">Nome do colaborador</label>
                      <div className="pt-1">
                        <input
                          type="text"
                          placeholder="Nome do colaborador"
                          id="email"
                          className="border rounded-lg border-gray p-2 mb-4 w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="campo">Email do colaborador</label>
                      <div className="pt-1">
                        <input
                          type="text"
                          placeholder="Email do colaborador"
                          id="dinheiro"
                          className="border rounded-lg border-gray p-2 mb-4 w-full"
                        />
                      </div>
                    </div>

                    <div className='mb-5'>
                      <label htmlFor="campo">Tipo do colaborador</label>
                      <div className="pt-1">
                        <div class="relative inline-flex h-11 w-2/5">
                          <select class="appearance-none bg-white border border-gray rounded-md min-w-full pl-3 pr-10  py-2 focus:outline-none focus:ring focus:border-blue-500 sm:text-sm">
                            <option>Tipo 1</option>
                            <option>Tipo 2</option>
                            <option>Tipo 3</option>
                            <option>Tipo 4</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end h-16 gap-4 ">
                      <button
                        onClick={closeModalEdit}
                        className="border text-text h-11 py-2 px-4 rounded ">
                        Cancelar
                      </button>
                      <button

                        type="submit"
                        className="bg-primary border-text border h-11 text-white py-2 px-4 rounded">
                        Confirmar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}


        </div>
      </Layout>
    </>

  )
};

