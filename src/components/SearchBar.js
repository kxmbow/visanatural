 const SearchBar = ({Text,onClick}) => (
    <div className="d-flex justify-content-center align-items-center w-50 animate__animated animate__fadeInUp" style={{margin:'auto',position:'relative',marginBottom:'3%'}}>
        <h1 className="text-center" style={{fontSize:'1.5rem',fontWeight:'bold', marginBottom:'1.5%'}}>Hi, Khadim</h1>
        <input
            type="text"
            className="form-control"
            placeholder="Describe what you want to build..."
            onChange={(e) => {
                console.log(e.target)
            }}
            style={{width:'60%',height:'60px',borderRadius:'100px',paddingLeft:'20px',margin:'auto',textAlign:'center',borderWidth:'2px'}}
        />

        <span 
            className={`sendButton material-symbols-outlined text-center`}  
            onClick={() => onClick}
        >
            close
        </span>
    </div>
)

export default SearchBar