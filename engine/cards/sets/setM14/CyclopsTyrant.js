"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CyclopsTyrant extends Card {
  constructor(game) {
    super(game, "Cyclops Tyrant", "Magic 2014 Core Set", "M14");
  }
}

module.exports = CyclopsTyrant;
