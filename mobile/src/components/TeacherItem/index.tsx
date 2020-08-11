import React from 'react';
import { View, Image, Text} from 'react-native';
import styles from './styles';
import TeacherList from '../../pages/TeacherList';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/62967515?s=460&u=fc0e9e922c93beedeba4b883edd8412ef0fffabe&v=4'}} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Pedro</Text>
                    <Text style={styles.subject}>Math</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Apaixonado por não morrer de fome Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil ducimus debitis, officia ex, earum aut at aliquid neque dignissimos ipsa quod incidunt minus dolor voluptate facere error.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>Preço/Hora: {'   '}</Text>
                <Text style={styles.priceValue}>R$ 30,00</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    {/*<Image source={heartOutlineIcon}/>*/}
                    <Image source={unfavoriteIcon}/>
                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={WhatsappIcon}/>
                    <Text style={styles.contactButtonText}>Entrar em Contato</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default TeacherItem;