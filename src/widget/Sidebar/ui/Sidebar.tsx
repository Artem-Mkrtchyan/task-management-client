import { FC, ReactNode, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss";

interface ISidebarProps {
    className?: string;
    children?: ReactNode
}

export const Sidebar: FC<ISidebarProps> = (props) => {
    const { className, children } = props;
    const [collapse, setCollapse] = useState<boolean>(false);

    const onToggle = () => {
        setCollapse((prevState) => !prevState);
    };

    return (
        <div className={classNames(styles.sidebar, {[styles["sidebar--collabse"]]: collapse}, [className])}>
            <button className={styles.sidebar__button} onClick={onToggle}>Toggle</button>
            <div>
                {children}
            </div>
        </div>
    );
};