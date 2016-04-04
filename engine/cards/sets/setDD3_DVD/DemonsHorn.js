"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonsHornBase = require("../setDST/DemonsHorn.js");

class DemonsHorn extends DemonsHornBase {
  constructor(game) {
    super(game, "Demon's Horn", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DemonsHorn;
