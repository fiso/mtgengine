"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TombofUrami extends Card {
  constructor(game) {
    super(game, "Tomb of Urami", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = TombofUrami;
