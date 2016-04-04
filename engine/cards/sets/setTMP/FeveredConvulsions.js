"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeveredConvulsions extends Card {
  constructor(game) {
    super(game, "Fevered Convulsions", "Tempest", "TMP");
  }
}

module.exports = FeveredConvulsions;
