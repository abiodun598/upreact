import './App.css';
export function Form() {
    
    function Myform(event) {
        event.preventDefault();
        const fd=new FormData(event.target)
        const mydata=Object.fromEntries(fd.entries())
        console.log(mydata)
    }
    return (
        <>
            <form onSubmit={Myform} className='lod'>
                <h2>Login Form</h2>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                /><br />
                <label htmlFor='password'>Password</label>
                <input

                    type='password'
                    name='password'
                    id='password'
                />
                <button type='submit'>send</button>
            </form><br /><br /><br />
        </>

    );
}