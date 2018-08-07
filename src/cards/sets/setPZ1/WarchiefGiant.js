"use strict";
const Constants = require ("../../../Constants");
const WarchiefGiantBase = require("../setCM2/WarchiefGiant");

class WarchiefGiant extends WarchiefGiantBase {
  constructor (game) {
    super(game, "Warchief Giant", "Legendary Cube", "PZ1");
  }
}

module.exports = WarchiefGiant;
