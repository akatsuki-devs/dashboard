import React, { ReactNode } from 'react';
import Input from './CustomInput';
import Button from './Button';
import { IconArrowNarrowRight } from '@tabler/icons-react';
// import Image from '../../node_modules/next/image';
import Image from 'next/image';
// import Image from 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
//import logo from '../../public/logo.png';
import logo from './images/logo.svg';

interface CardFormProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onClick: () => void;
  children: React.ReactNode;
}

export default function CardForm({title, subtitle, children, onClick, buttonText}: CardFormProps) {
  return (
    <div className="flex flex-col items-start gap-7 w-72 sm:w-[90%] md:w-[80%] lg:w-[120%] mx-auto shadow shadow-slate-400 p-10 rounded-lg bg-white">
      <div className="flex items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
        <Image src={logo} height={100} width={300} alt="Easy4U" />
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-sm text-zinc-400 font-normal">
          {subtitle}
        </span>
        <h1 className="text-5xl text-black font-semibold">{title}</h1>
      </div>
      <form className="flex flex-col items-center justify-center gap-7 w-full">
        {children}
        <Button 
          text={buttonText}
          icon={<IconArrowNarrowRight />}
          onClick={onClick}          
        />
      </form>
    </div>
  );
}
