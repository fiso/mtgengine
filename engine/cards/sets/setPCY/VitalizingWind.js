"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VitalizingWind extends Card {
  constructor(game) {
    super(game, "Vitalizing Wind", "Prophecy", "PCY");
  }
}

module.exports = VitalizingWind;
