import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({

    container:{
        margin: 20,

    },
    image:{
        width: '100%',
        aspectRatio: 3/2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    location:{
        marginVertical: 10,
        fontSize: 14,
        color: '#5b5b5b',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 26,
    },
    description:{
        fontSize: 18,
        lineHeight: 26,
    }

});
export default styles;