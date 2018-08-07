"use strict";
const Constants = require ("../../../Constants");
const FiremindsForesightBase = require("../setDDS/FiremindsForesight");

class FiremindsForesight extends FiremindsForesightBase {
  constructor (game) {
    super(game, "Firemind's Foresight", "Commander 2015", "C15");
  }
}

module.exports = FiremindsForesight;
