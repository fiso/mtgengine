"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ghoultree extends Card {
  constructor(game) {
    super(game, "Ghoultree", "Dark Ascension", "DKA");
  }
}

module.exports = Ghoultree;
