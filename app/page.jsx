
import LikeButton from "./like-button";
// Crear función header (desectructurada)
function Header({ title }) {
    console.log("🚀 ~ Header ~ title:", title);
    return <h1>{`Cool ${createTitle(title)}`}</h1>
}

// Crear función Header (sin desestructurar)
function HeaderVanilla(props) {
    console.log("🚀 ~ HeaderVanilla ~ props:", props);
    console.log("🚀 ~ HeaderVanilla ~ title:", props.title);
    return <h1>{ props.title }</h1>
}

// Crear función Header (operador ternario)
function HeaderTernary({ title }) {
    console.log("🚀 ~ HeaderTernary ~ title:", title);
    return <h1>{`Cool ${title ? title : "Default Title"}`}</h1>
}
            
// Crear función HomePage
export default function HomePage() {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
    return <div>
        {/* El Header está dentro del HomePage */}
        <HeaderTernary title="React" />
        <HeaderTernary title="A newnewnewnewwhatever title" />
        <Header title="Develop. Preview. Ship." />
        <ul>
            {
                names.map((name, i) => (
                <li key={ i }>{ name }</li>
            ))
        }
        </ul>
        <LikeButton />
    </div>
}

// Crear función createTitle
function createTitle(title) {
    if (title) {
        return title;
    } else {
        return "Default title";
    }
}