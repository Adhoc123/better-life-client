import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleToast = () => toast("Service Added Successfully.")

    ///adding service 
    const handleAddService = event =>{
         event.preventDefault();
         
         const form = event.target;
         const name = form.name.value;
         const picture = form.picture.value;
         const price = form.price.value;
         const description = form.description.value;
         const email = form.email.value;
         console.log(name, picture, price, description);

         const serviceInfo = {
            name, picture, price, description, email
         }
         ///posting data to database
         fetch('https://better-life-server.vercel.app/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.acknowledged){
                handleToast()
                form.reset();
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            
           <form onSubmit={handleAddService} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Service Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Photo URL</span>
                </label>
                <input type="text" name='picture' placeholder="Photo URL" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Price</span>
                </label>
                <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name='email' defaultValue={user?.email} placeholder="Your mail" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold">Description</span>
                </label>                
                <textarea name='description' className="textarea textarea-info w-full h-52 " placeholder="Write Service Description" required></textarea>
                </div>
                <ToastContainer />
                <div className="form-control mt-6">
                
                    <input className="btn btn-primary"   type='submit' value='Add a service' />
                    {/* <button >submit</button> */}
                     <ToastContainer/>
                </div>
            </form>
            
        </div>
    );
};

export default AddService;