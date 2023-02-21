import styles from "./styles.module.css";
import {
    Box,
    Avatar,
    Button,
    Menu,
} from '@mantine/core';
export default function Header() {
    return(
        <div className={styles.header}>
            <Button 
            variant="subtle"
            size='md'
            radius='xl'
            styles={(theme) =>({
                root:{
                    '&:hover': {
                        borderColor: 'transparent',
                        backgroundColor: 'transparent',
                    }
                }
            })}
            >
                <Avatar
                src="../../../mainLogo.jpg"
                size='sm'
                radius='xl'
                ></Avatar>
            </Button>
            <Button 
            color='dark'
            radius="xl" 
            size="md">
                Home
            </Button>
            <Menu withArrow>
                <Menu.Target>
                    <Button
                    styles={(theme) =>({
                        root:{
                            '&:hover': {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                            }

                        }
                    })}
                    variant="subtle"
                    color='dark'
                    radius="xl" 
                    size="md"
                    rightIcon={
                        <img 
                        src="../../../downArrow.png"
                        width={10}
                        height={10}
                        color="white"
                        />
                    }
                    >
                        Create
                    </Button>
                    </Menu.Target>
                    <Menu.Dropdown>
                        <Menu.Item >Settings</Menu.Item>
                        <Menu.Item >Messages</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
        </div>
        )
        
}