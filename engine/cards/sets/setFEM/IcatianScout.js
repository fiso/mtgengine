"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcatianScout extends Card {
  constructor(game) {
    super(game, "Icatian Scout", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianScout;
