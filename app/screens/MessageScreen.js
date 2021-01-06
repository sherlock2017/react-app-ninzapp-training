import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AppListItem from '../components/AppListItem';
import Screen from "../components/Screen";
import AppListItemDeleteAction from '../components/AppListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';

const initialMsgs = [
    {
        id: 1,
        title: "Ram",
        snippet: "Hi where are you ?",
        imageUrl: "https://lh3.googleusercontent.com/proxy/eBbYEVPFcGu8kVuxJ8xVCM_Pp4oxj5bzm3_Ie0c4fGcXWzxaJCfvn6MBVJpI2HZ2v9YLfXPkMx2YMrQz0DHJy1DGqdrODlv5saUorST2Ev3AePDgcg"
    },
    {
        id: 2,
        title: "Jay",
        snippet: "I have reached the location",
        imageUrl: "https://lh3.googleusercontent.com/proxy/eBbYEVPFcGu8kVuxJ8xVCM_Pp4oxj5bzm3_Ie0c4fGcXWzxaJCfvn6MBVJpI2HZ2v9YLfXPkMx2YMrQz0DHJy1DGqdrODlv5saUorST2Ev3AePDgcg"
    },
    {
        id: 3,
        title: "Manas",
        snippet: "Your beverages are ready and on the way",
        imageUrl: "https://lh3.googleusercontent.com/proxy/eBbYEVPFcGu8kVuxJ8xVCM_Pp4oxj5bzm3_Ie0c4fGcXWzxaJCfvn6MBVJpI2HZ2v9YLfXPkMx2YMrQz0DHJy1DGqdrODlv5saUorST2Ev3AePDgcg"
    },
    {
        id: 4,
        title: "Utkarsh",
        snippet: "I am stading on the next lane",
        imageUrl: "https://lh3.googleusercontent.com/proxy/eBbYEVPFcGu8kVuxJ8xVCM_Pp4oxj5bzm3_Ie0c4fGcXWzxaJCfvn6MBVJpI2HZ2v9YLfXPkMx2YMrQz0DHJy1DGqdrODlv5saUorST2Ev3AePDgcg"
    },
    {
        id: 5,
        title: "Mukesh",
        snippet: "Looking forward for good ratings",
        imageUrl: "https://lh3.googleusercontent.com/proxy/eBbYEVPFcGu8kVuxJ8xVCM_Pp4oxj5bzm3_Ie0c4fGcXWzxaJCfvn6MBVJpI2HZ2v9YLfXPkMx2YMrQz0DHJy1DGqdrODlv5saUorST2Ev3AePDgcg"
    },
];

function MessageScreen(props) {
    const [messages, setMessages] = useState(initialMsgs);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (item) => {
        setMessages(messages.filter(m => m.id != item.id));
    }

    const handleRefresh = () => {
        setMessages([
            {
                id: 6,
                title: "Refresh Guy",
                snippet: "Hi",
                imageUrl: "https://lh3.googleusercontent.com/proxy/eBbYEVPFcGu8kVuxJ8xVCM_Pp4oxj5bzm3_Ie0c4fGcXWzxaJCfvn6MBVJpI2HZ2v9YLfXPkMx2YMrQz0DHJy1DGqdrODlv5saUorST2Ev3AePDgcg"
            },
            ...messages
        ])
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <AppListItem
                        imageUrl={item.imageUrl}
                        title={item.title}
                        snippet={item.snippet}
                        renderRightActions={() => <AppListItemDeleteAction onPress={() => handleDelete(item)} />}
                        onPress={() => alert("Message Pressed")}
                    />
                }
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={handleRefresh}
            />
        </Screen>
    );
}

export default MessageScreen;

const styles = StyleSheet.create({
    
})