"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FiremindsForesightBase = require("../setC15/FiremindsForesight.js");

class FiremindsForesight extends FiremindsForesightBase {
  constructor(game) {
    super(game, "Firemind's Foresight", "Return to Ravnica", "RTR");
  }
}

module.exports = FiremindsForesight;
