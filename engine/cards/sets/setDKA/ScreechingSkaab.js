"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScreechingSkaab extends Card {
  constructor(game) {
    super(game, "Screeching Skaab", "Dark Ascension", "DKA");
  }
}

module.exports = ScreechingSkaab;
