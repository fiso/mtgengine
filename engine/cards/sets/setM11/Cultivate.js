"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CultivateBase = require("../setC13/Cultivate.js");

class Cultivate extends CultivateBase {
  constructor(game) {
    super(game, "Cultivate", "Magic 2011", "M11");
  }
}

module.exports = Cultivate;
