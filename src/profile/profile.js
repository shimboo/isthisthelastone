export default function Profile(prop) {
    return (
        <div className="she">
            <img className='photo' src={prop.Photo} alt="img in src" />
            <h2>{prop.fullname}</h2>
            <h2>{prop.age}</h2>
            <h2>{prop.Bio}</h2>
            <button onClick={prop.alert}>submit</button>
        </div>
    );
}

Profile.defaultProps = {
    Bio: "this the default data",
    age: "enter your age please"
};