"use strict";
const Constants = require ("../../../Constants");
const FiremindsForesightBase = require("../setDDS/FiremindsForesight");

class FiremindsForesight extends FiremindsForesightBase {
  constructor (game) {
    super(game, "Firemind's Foresight", "Return to Ravnica", "RTR");
  }
}

module.exports = FiremindsForesight;
