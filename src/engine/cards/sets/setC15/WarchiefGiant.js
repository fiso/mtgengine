"use strict";
const Constants = require ("../../../Constants");
const WarchiefGiantBase = require("../setCM2/WarchiefGiant");

class WarchiefGiant extends WarchiefGiantBase {
  constructor (game) {
    super(game, "Warchief Giant", "Commander 2015", "C15");
  }
}

module.exports = WarchiefGiant;
