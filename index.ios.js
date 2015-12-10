/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var faceMashPage = require('./tabs/FaceMash.js');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} = React;

var FaceMash = React.createClass({
  getInitialState() {
    return {
      selectedTab:'faceMash'
    }
  },
  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },
  render: function() {
    return (
      
      <TabBarIOS>
        <TabBarIOS.Item
            title= "Face Mash"
            icon= {require('image!facemash')}
            onPress={ () => this.changeTab('faceMash') }
            selected={this.state.selectedTab === 'faceMash'}>
           
            <NavigatorIOS
            style={styles.container}
            initialRoute={{
              title: 'face',
              component: faceMashPage,
            }}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
            title= "Messages"
            icon= {require('image!messages')}
            onPress={ () => this.changeTab('messages') }
            selected={this.state.selectedTab === 'messages'}>
            <View>
              <Text>Messages</Text>
            </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
            title= "Setting"
            icon= {require('image!setting')}
            onPress={ () => this.changeTab('setting') }
            selected={this.state.selectedTab === 'setting'}>
            <View>
              <Text>
                Setting
              </Text>
            </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});



var styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    flex:1,
    backgroundColor:'#ff0000',
  },
});

AppRegistry.registerComponent('FaceMash', () => FaceMash);
