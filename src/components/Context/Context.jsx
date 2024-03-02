import react,{ createContext, useContext } from "react"
import all_courses from "../../assets/all_courses"

// lets create a context variable 
export const CourseContext =createContext(null);

const CourseContextProvider = (props)=>{
    const  contextValue = {all_courses};
    
    return (

        <CourseContext.Provider value={contextValue}>
            {props.children}
        </CourseContext.Provider>
    )

}
export default CourseContextProvider;
