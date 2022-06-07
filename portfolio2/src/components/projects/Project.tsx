interface Props{
    title:string;
    image: string;
    description: string 
    website?: string,
    github:string ,
    alt:string,

}


export function Project({title, image, description, website, github, alt}: Props) {

    return (
        <section className="project">
            <img src={image} alt={alt}/>
            <div className="description">
            <h2>{title}</h2>
            <p className="project__description">{description}</p>
            <div className="links">
                {website ?  <a href={website} target="_blank" rel="noopener noreferrer" className="project__link">Website</a> : "" }
                <a href={github} target="_blank" rel="noopener noreferrer" className="project__link--git">Github</a>
                </div> 
            </div>
           
        </section>
    )

}