import React from 'react';
import Screen from '../components/Screen';
import { FlatList } from 'react-native';
import AppCard from '../components/AppCard';

const pizzaList = [
    {
      id: 1,
      title: "Double Cheeza Pizza",
      price: "Rs 300",
      imageUri: "https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk"
    },
    {
      id:2,
      title: "Tripple Cheeze Pizza",
      price: "Rs 400",
      imageUri: "https://images.getbento.com/accounts/218d4ffbb37dd2996ba53d258951a956/media/UFHsFlMmR8e6NSVYKlMw_ClassicCombo.jpg?fit=max&w=1800&auto=format,compress"
    },
    {
      id:3,
      title: "Fourth Cheeze Pizza",
      price: "Rs 500",
      imageUri: "https://www.tasteofhome.com/wp-content/uploads/2017/10/Whole-Wheat-Veggie-Pizza_EXPS_HCKA19_12558_C10_13_5b.jpg"
    }
  ];

function PizzaListingScreen(props) {
    return (
        <Screen>
            <FlatList
                data={pizzaList}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                <AppCard
                item={item}
                onPress={() => alert('clicked')}
            />
            }
            />
        </Screen>
    );
}

export default PizzaListingScreen;