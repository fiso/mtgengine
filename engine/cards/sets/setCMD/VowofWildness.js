"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VowofWildness extends Card {
  constructor(game) {
    super(game, "Vow of Wildness", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VowofWildness;
