function Students(props) {
    return(
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

export default Students;
