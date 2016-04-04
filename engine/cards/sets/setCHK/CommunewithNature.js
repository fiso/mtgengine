"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommunewithNature extends Card {
  constructor(game) {
    super(game, "Commune with Nature", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CommunewithNature;
