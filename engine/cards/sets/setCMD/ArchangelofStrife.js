"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArchangelofStrifeBase = require("../setV15/ArchangelofStrife.js");

class ArchangelofStrife extends ArchangelofStrifeBase {
  constructor(game) {
    super(game, "Archangel of Strife", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = ArchangelofStrife;
