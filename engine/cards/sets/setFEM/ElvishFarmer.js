"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishFarmer extends Card {
  constructor(game) {
    super(game, "Elvish Farmer", "Fallen Empires", "FEM");
  }
}

module.exports = ElvishFarmer;
