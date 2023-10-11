import React, { useState } from 'react';
import Layout from '../components/Layout';
import { IconEdit } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import TableProdutos from "../components/tablesProdutosColaboradores";
import Image from 'next/image';
import ImageTeste from "../components/icons/images/imagemFruta.png";


const Produtos = () => {
  // modal de cadastro open and close
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
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

  return (
    <Layout>
      <div className='flex flex-col h-full bg-second'>
        <div className='flex items-center justify-center pb-6 h-1/4'>
          <div className='flex h-4/5 w-4/5 items-end '>
            <button onClick={openModal} className='h-11 w-80 rounded-md bg-primary'>Cadastrar produto</button>
          </div>
        </div>


        <div className='flex items-center justify-center h-full '>
          <div className='flex justify-center  items-center h-4/5 w-4/5 pl-16 pr-16 rounded-lg shadow-shadow-button bg-white text-text '>
            <div className='flex  justify-center h-5/6 w-full bg-white text-text'>
              {/* div da tabela */}
              <div className='w-full flex items-center justify-center'>

                <div class=" w-full h-4/5 relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="overflow-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr className='sticky top-0 bg-primary text-white'>
                        <th scope="col" className=" px-6 py-3">
                          Foto
                        </th>
                        <th scope="col" className="px-6 py-3">
                          ID Produto
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Nome
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Preço
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Disponibilidade
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" text-sm font-medium dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" className="px-6 py-4">
                          <span className="items-center justify-center w-[38px] h-[38px]">
                            <Image className="rounded-full" src={ImageTeste} alt="imagem teste" height={38} width={38} />
                          </span>

                        </td>
                        <td className="px-6 py-4 ">
                          1
                        </td>
                        <td className="px-6 py-4">
                          Salgado Assado
                        </td>
                        <td className="px-6 py-4">
                          R$5,50
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div class="relative inline-flex">
                            <select class="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 focus:outline-none focus:ring focus:border-blue-500 sm:text-sm">
                              <option>Sim</option>
                              <option>Não</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </div>
                          </div>
                        </td>
                        <td className='flex px-6 py-4  gap-3 items-center justify-around'>
                          <IconEdit onClick={openModalEdit} color='#979797' width={24} height={24} />
                          <IconTrash color='#F15050' width={24} height={24} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
          {/* <TableProdutos Type="tableProdutos" /> */}
        </div>

        {/* Modal de cadastro */}
        {isOpen && (
          <div className="bg-gradient fixed inset-0 flex items-center justify-center z-50">
            <div className="grid modal-container rounded-lg p-4 w-[680px] h-fit text-text bg-white">
              <div className=" modal-content  p-4 rounded-xl">
                <h2 className="text-xl font-bold my-4">Cadastrar novo produto</h2>
                <form className="fle flex-col justify-between">
                  {/* foto */}
                  <div>
                    <label className="" htmlFor="campo">Foto do produto</label>
                    <div className="pt-1">
                      <input
                        type="file"
                        accept="image/*" 
                        placeholder="Foto"
                        id="foto"
                        className="rounded-full items-center justify-center w-[100px] h-[100px] bg- grayMedium"
                      />
                    </div>
                  </div>

                  {/* Nome */}
                  <div>
                    <label htmlFor="campo">Nome do produto</label>
                    <div className="pt-1">
                      <input
                        type="text"
                        placeholder="Nome do produto"
                        id="nome"
                        className="border rounded-lg border-gray p-2 mb-4 w-full"
                      />
                    </div>
                  </div>

                  {/* Descrição */}
                  <div>
                    <label htmlFor="campo">Descrição do produto</label>
                    <div className="pt-1">
                      <input
                        type="text"
                        placeholder="Descrição do produto"
                        id="descricao"
                        className="h-11 border rounded-lg border-gray p-2 mb-4 w-full"
                      />
                    </div>
                  </div>

                  {/* Div do tipo e preço do produto */}
                  <div className='flex gap-8'>
                    {/* Tipo */}
                    <div className=''>
                      <label htmlFor="campo">Tipo do produto</label>
                      <div className="pt-1 ">
                        <div class="relative inline-flex h-11 w-full">
                          <select class="appearance-none bg-white border border-gray rounded-md min-w-full pl-3 pr-10  py-2 focus:outline-none focus:ring focus:border-blue-500 sm:text-sm">
                            <option>Sim</option>
                            <option>Não</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tempo de preparacao */}
                    <div className=''>
                      <label htmlFor="campo">Tempo de preparacao</label>
                      <div className="pt-1">
                        <input
                          type="text"
                          placeholder="Digite o preço"
                          id="preco"
                          className="border h-11 rounded-lg border-gray p-2 mb-4 w-full"
                        />
                      </div>
                    </div>

                    {/* Preço */}
                    <div className=''>
                      <label htmlFor="campo">Preço</label>
                      <div className="pt-1">
                        <input
                          type="text"
                          placeholder="Digite o preço"
                          id="preco"
                          className="border h-11 rounded-lg border-gray p-2 mb-4 w-full"
                        />
                      </div>
                    </div>


                  </div>


                  <div className="flex justify-end h-16 gap-4 ">
                    <button
                      onClick={closeModal}
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

        {/* Modal de edição */}
        {isOpenEdit && (
          <div className="bg-gradient fixed inset-0 flex items-center justify-center z-50">
            <div className="grid modal-container rounded-lg p-4 w-[680px] h-fit text-text bg-white">
              <div className=" modal-content  p-4 rounded-xl">
                <h2 className="text-xl font-bold my-4">Editar produto</h2>
                <form className="fle flex-col justify-between">
                  {/* foto */}
                  <div>
                    <label className="" htmlFor="campo">Foto do produto</label>
                    <div className="pt-1">
                      <input
                        type="text"
                        placeholder="Foto"
                        id="foto"
                        className="border rounded-lg border-gray p-2 mb-4 w-full"
                      />
                    </div>
                  </div>

                  {/* Nome */}
                  <div>
                    <label htmlFor="campo">Nome do produto</label>
                    <div className="pt-1">
                      <input
                        type="text"
                        placeholder="Nome do produto"
                        id="nome"
                        className="border rounded-lg border-gray p-2 mb-4 w-full"
                      />
                    </div>
                  </div>

                  {/* Descrição */}
                  <div>
                    <label htmlFor="campo">Descrição do produto</label>
                    <div className="pt-1">
                      <input
                        type="text"
                        placeholder="Descrição do produto"
                        id="descricao"
                        className="h-11 border rounded-lg border-gray p-2 mb-4 w-full"
                      />
                    </div>
                  </div>

                  {/* Div do tipo e preço do produto */}
                  <div className='flex gap-8'>
                    {/* Tipo */}
                    <div className=''>
                      <label htmlFor="campo">Tipo do produto</label>
                      <div className="pt-1 ">
                        <div class="relative inline-flex h-11 w-full">
                          <select class="appearance-none bg-white border border-gray rounded-md min-w-full pl-3 pr-10  py-2 focus:outline-none focus:ring focus:border-blue-500 sm:text-sm">
                            <option>Sim</option>
                            <option>Não</option>
                          </select>
                          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Preço */}
                    <div className=''>
                      <label htmlFor="campo">Preço</label>
                      <div className="pt-1">
                        <input
                          type="text"
                          placeholder="Digite o preço"
                          id="preco"
                          className="border h-11 rounded-lg border-gray p-2 mb-4 w-full"
                        />
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
  );
};

export default Produtos;