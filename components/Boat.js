import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

// Exercise 7
const Boat = ({name, description, picture}) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.headerContainer}>
                <Icon name="sailboat" size={20} color="#B23B23" style={styles.iconStyle}/>
                <Text style={styles.boatName}>{name}</Text>
            </View>
            <Text style={styles.boatDescription}>{description}</Text>
            <Image source={picture} style={styles.boatImage} />
        </View>
    );
}

const AllBoats = () => {
    return (
        <ScrollView>
            <Text style={styles.headerText}>GetABoat - For Sale</Text>
            <Boat name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." picture = {require('../img/sea_ray.jpg')}/>
            <Boat name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." picture = {require('../img/four_winns.jpg')}/>
            <Boat name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." picture = {require('../img/flipper.jpg')}/>
            <Boat name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." picture = {require('../img/princess.jpg')}/>
            <Boat name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." picture = {require('../img/bayliner.jpg')}/>
            <Boat name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." picture = {require('../img/fairline.jpg')}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        alignItems: 'center'
    },
    headerText: {
        margin: 10,
        marginTop: 60,
        padding: 20,
        borderColor: '#bbbbbb',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#00293C',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    },

    boatContainer: {
        margin: 10,
        padding: 10,
        borderColor: '#bbbbbb',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#F5E9D7'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    boatName: {
        fontSize: 18,
        fontWeight: 'semibold',
        color: '#333333',
        marginLeft: 10
    },
    boatDescription: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 10
    },
    boatImage: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    iconStyle: {
        marginRight: 10
    }
});

export default AllBoats;
