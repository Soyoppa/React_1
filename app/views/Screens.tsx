import { View, Text, StyleSheet,Image } from 'react-native';


function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
function BuyPromoScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Buy Promo!</Text>
        </View>
    );
}

function LifeEssentialsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>LifeEssentials!</Text>
        </View>
    );
}


function RewardsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Rewards!</Text>
        </View>
    );
}


function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        </View>
    );
}


export { HomeScreen, BuyPromoScreen, LifeEssentialsScreen, RewardsScreen, ProfileScreen };