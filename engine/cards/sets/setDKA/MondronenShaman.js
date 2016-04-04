"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MondronenShaman extends Card {
  constructor(game) {
    super(game, "Mondronen Shaman", "Dark Ascension", "DKA");
  }
}

module.exports = MondronenShaman;
