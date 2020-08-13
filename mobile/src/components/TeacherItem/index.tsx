import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import TeacherList from '../../pages/TeacherList';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import WhatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';

export interface Teacher {
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    function handleLinkToWhatsapp() {

        api.post('connections', {
            user_id: teacher.id
        })
        Linking.openURL(`whastapp//send?phone=${teacher.whatsapp}`)
    }

    async function handleToggleFavorited() {
        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];

        if(favorites){
            favoritesArray = JSON.parse(favorites);
        }

        if(isFavorited){
            //remover dos favoritos
            const favoriteIndex = favoritesArray.findIndex((TeacherItem: Teacher) => {
                return TeacherItem.id = teacher.id;
            });
            favoritesArray.splice(favoriteIndex, 1)
            setIsFavorited(false);
            
        }else{
            //adicionar aos favoritos
            favoritesArray.push(teacher);
            setIsFavorited(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}> {teacher.name} </Text>
                    <Text style={styles.subject}> {teacher.subject} </Text>
                </View>
            </View>

            <Text style={styles.bio}> {teacher.bio} </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>Preço/Hora: {'   '}</Text>
                <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleToggleFavorited} style={[styles.favoriteButton,
                    isFavorited ? styles.favorited : {} 
                    ]}
                >
                { isFavorited
                    ? <Image source={unfavoriteIcon} />
                    : <Image source={heartOutlineIcon}/>
                }
                    
                    
                </RectButton>

                <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                    <Image source={WhatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em Contato</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default TeacherItem;