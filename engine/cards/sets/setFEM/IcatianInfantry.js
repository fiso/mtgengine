"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcatianInfantry extends Card {
  constructor(game) {
    super(game, "Icatian Infantry", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianInfantry;
