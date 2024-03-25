

const Alert = ({mensaje, tipo})=>{

    return(
        <>
            <div className={`alert ${tipo}`}>
                {mensaje}
            </div>
        </>
    );
};

export default Alert;