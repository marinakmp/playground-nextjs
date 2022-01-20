import Image from "next/image";
import secondImage from "../../public/images/580x389.gif";
import avatar from "../../public/images/profile.jpg";
import thirdImage from "../../public/images/turtl.jpg";
import styles from "./imgDemo.module.scss";

export default function ImgDemo() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>block</div>
      <Image
        alt="avatar"
        src={avatar}
        layout="responsive"
        width={580}
        height={389}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore
        dolor asperiores earum, fugiat error aliquam beatae expedita non?
        Sapiente iure amet, dolorum aliquid ipsa aspernatur et vel saepe quaerat
        veritatis ratione! Nisi omnis et est magni sed amet corrupti
        voluptatibus, velit quibusdam ratione necessitatibus minima eos
        doloremque dolorem neque.
      </p>
      <h3>
        External domain image
        <br />
        <small>lazyBoundary: 600px</small>
      </h3>
      <Image
        alt="avatar"
        src="https://via.placeholder.com/300/fff9c0"
        height={300}
        width={300}
        lazyBoundary="600px"
      />
      <div className={styles.block}>block</div>
      <div className={styles.containerH}>
        <h2 className={styles.hd}>Container 1rst h-restricted</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore
          dolor asperiores earum, fugiat error aliquam beatae expedita non?
          Sapiente iure amet, dolorum aliquid ipsa aspernatur et vel saepe
          quaerat veritatis ratione! Nisi omnis et est magni sed amet corrupti
          voluptatibus, velit quibusdam ratione necessitatibus minima eos
          doloremque dolorem neque.
        </p>
        <Image alt="2nd" src={secondImage} layout="responsive" />
      </div>
      <div className={styles.block}>block</div>
      <div className={styles.containerH}>
        <h2 className={styles.hd}>Container 2nd h-restricted</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore
          dolor asperiores earum, fugiat error aliquam beatae expedita non?
          Sapiente iure amet, dolorum aliquid ipsa aspernatur et vel saepe
          quaerat veritatis ratione! Nisi omnis et est magni sed amet corrupti
          voluptatibus, velit quibusdam ratione necessitatibus minima eos
          doloremque dolorem neque.
        </p>
        <div className={styles.block}>block</div>
        <Image alt="3rd" src={thirdImage} layout="responsive" />
      </div>
    </div>
  );
}
