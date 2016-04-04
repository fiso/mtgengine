"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcatianLieutenant extends Card {
  constructor(game) {
    super(game, "Icatian Lieutenant", "Fallen Empires", "FEM");
  }
}

module.exports = IcatianLieutenant;
