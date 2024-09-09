import { StyleSheet } from 'react-native';
import { colors } from "../Keyboard/constants";



export default StyleSheet.create({

    map: {
      alignSelf: 'stretch',
      marginVertical: "10%",
      marginLeft: "4%",
      height: 100,
    },
  
    row: {
      alignSelf: "stretch",
      flexDirection: "row",
    },
  
    cell: {
      borderWidth: 3,
      borderColor: colors.lightgrey,
      flex: 1,
      maxWidth: 60,
      aspectRatio: 1,
      margin: 3,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
  
    cellText: {
      color: "lightgrey",
      fontWeight: "bold",
      fontSize: 28,
  
    },
  
  });