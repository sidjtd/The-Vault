'use strict';

/*  var myVault = vault();
console.log( myVault.getValue() ); // null
console.log( myVault.setValue('secret password', 'hunter2') );

console.log( myVault.getValue('secret password') ); // hunter2
console.log( myVault.getValue('bank account') ); // null

var yourVault = vault();
console.log( myVault.getValue('secret password') ); // null */

//THIS IS THE VAULT
module.exports = function() {

    var account = {};

    function _setValue(daKey,value){
      account[daKey] = value;
      console.log(account[daKey]);
      return account[daKey];
    }
      
    function _getValue(key) {
      if(!key||!account[key]){
        return null;
      }

      else{
        console.log("You are at else");
        return account[key];
        }
    }
    
    return {
      getValue : _getValue,
      setValue : _setValue
    };
  };