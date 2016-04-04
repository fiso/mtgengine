"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerashisCry extends Card {
  constructor(game) {
    super(game, "Terashi's Cry", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TerashisCry;
