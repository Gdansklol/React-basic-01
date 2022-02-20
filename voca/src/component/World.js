//make World component
import styles from "./World.module.css";

export default function World () {
    return (
        <div>
        <h1
        style={{
            color: "#f00",
            borderRight: "12px solid #000",
            marginBottom: "50px",
            opacity:1,
        }}
        >
        World (Sverige)
        </h1>
        <div className={styles.box}>World</div>
        
    </div>
    
    );
}