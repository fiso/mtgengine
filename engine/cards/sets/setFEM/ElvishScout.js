"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishScout extends Card {
  constructor(game) {
    super(game, "Elvish Scout", "Fallen Empires", "FEM");
  }
}

module.exports = ElvishScout;
