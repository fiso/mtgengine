"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShuFarmer extends Card {
  constructor(game) {
    super(game, "Shu Farmer", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuFarmer;
