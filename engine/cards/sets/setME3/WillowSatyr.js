"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WillowSatyrBase = require("../setLEG/WillowSatyr.js");

class WillowSatyr extends WillowSatyrBase {
  constructor(game) {
    super(game, "Willow Satyr", "Masters Edition III", "ME3");
  }
}

module.exports = WillowSatyr;
