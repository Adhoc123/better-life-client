import React from 'react';
import { Link } from 'react-router-dom';

const More = () => {
    return (
        <div>
             <div className="card w-full bg-base-100 shadow-xl text-center p-5">
        <div className="card-body m-5 text-center">
            <h2 className="text-4xl font-bold text-center">Importance of surgery</h2>
            <p>The act of performing surgery may be called a surgical procedure, operation, or simply "surgery". In this context, the verb "operate" means to perform surgery. The adjective surgical means pertaining to surgery; e.g. surgical instruments or surgical nurse. The person or subject on which the surgery is performed can be a person or an animal. A surgeon is a person who practices surgery and a surgeon's assistant is a person who practices surgical assistance. A surgical team is made up of the surgeon, the surgeon's assistant, an anaesthetist, a circulating nurse and a surgical technologist. Surgery usually spans from minutes to hours, but it is typically not an ongoing or periodic type of treatment. The term "surgery" can also refer to the place where surgery is performed, or, in British English, simply the office of a physician,[1] dentist, or veterinarian.</p>
            <h1 className='text-2xl font-bold'>To know more <a className='text-orange-600' href='https://en.wikipedia.org/wiki/Surgery'>Check here</a></h1>
        </div>
        </div>
        </div>
    );
};

export default More;