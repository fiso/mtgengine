"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CultivateBase = require("../setC13/Cultivate.js");

class Cultivate extends CultivateBase {
  constructor(game) {
    super(game, "Cultivate", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Cultivate;
