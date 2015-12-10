'user strict';

var React = require('react-native');

var {
	StyleSheet,
	Text,
	View,
} = React;

var facemashTab = React.createClass({
	render:function(){
		return (
			<View style={ styles.container }>
       			 <View style={ styles.content }>
          			<Text>
            			FaceMash tab!
          			</Text>
        		</View>
        		<View style={ styles.content }>
          			<Text>
            			FaceMash tab!
          			</Text>
        		</View>
        		<View style={ styles.content }>
          			<Text>
            			FaceMash tab!
          			</Text>
        		</View>
        		<View style={ styles.content }>
          			<Text>
            			FaceMash tab!
          			</Text>
        		</View>
        		<View style={ styles.content }>
          			<Text>
            			FaceMash tab!
          			</Text>
        		</View>
        		<View style={ styles.content }>
          			<Text>
            			FaceMash tab!
          			</Text>
        		</View>
        		<View style={ styles.content }>
          			<Text>
            			FaceMash tab!
          			</Text>
        		</View>

      		</View>
		);
	}
});

var styles = StyleSheet.create ({

	container: {
		flex:1,
		backgroundColor:'#fff',
		height:40,
	},

	firstControl: {

		flex:1,
		marginTop:40,

	}

});
module.exports = facemashTab;