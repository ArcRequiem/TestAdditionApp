import React, { Component } from 'react';
import { Alert, Button, Dimensions, Platform, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

export default class Calculate extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 0,
      negative: false
    }
  }
  _onPressButton1 =() => {
    this.setState({
      count: this.state.count+1
    })
  }
  
  _onPressButton2 =() => {
    this.setState({
      count: this.state.count+2
    })
  }
  
  _onPressButton3 =() => {
    this.setState({
      count: this.state.count+3
    })
  }
  _onPressButton4 =() => {
    this.setState({
      count: this.state.count+4
    })
  }
  _onPressButton5 =() => {
    this.setState({
      count: this.state.count+5
    })
  }
  _onPressButton6 =() => {
    this.setState({
      count: this.state.count+6
    })
  }
  _onPressButton7 =() => {
    this.setState({
      count: this.state.count+7
    })
  }
  _onPressButton8 =() => {
    this.setState({
      count: this.state.count+8
    })
  }
  _onPressButton9 =() => {
    this.setState({
      count: this.state.count+9
    })
  }
  _onPressButton0 =() => {
    this.setState({
      count: this.state.count+0
    })
  }
  _onPressButtonC =() => {
    this.setState({
      count: this.state.count  =0
    })
  }
  _onPressButtonN =() => {
    this.setState({
      count: this.state.count= -this.state.count
    })
  }
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor: 'white'}}>
          <Text style={{color:'black', fontSize: 40}}>
            {this.state.count !== 0 ? this.state.count:null}
          </Text>
        </View>
        <View style={styles.numButtonContainer}>
          <TouchableHighlight onPress={this._onPressButton7} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>7</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton8} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>8</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton9} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>9</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.numButtonContainer}>
          <TouchableHighlight onPress={this._onPressButton4} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>4</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton5} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>5</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton6} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>6</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.numButtonContainer}>
          <TouchableHighlight onPress={this._onPressButton1} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>1</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton2} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>2</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButton3} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>3</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.numButtonContainer}>
          <TouchableHighlight onPress={this._onPressButton0} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>0</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButtonC} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>C</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this._onPressButtonN} underlayColor="white">
            <View style={styles.numButton}>
              <Text style={styles.numButtonText}>-</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numButtonContainer:{
    backgroundColor:'black',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  numButton: {
    flex:1,
    backgroundColor:'gray',
    textAlign:'center',
    width: fullwidth/3
  },
  numButtonText: {
    fontSize: 40,
    textAlign:'center',
    fontWeight: 'bold'
  }
});
