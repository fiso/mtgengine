"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolrathsCurse extends Card {
  constructor(game) {
    super(game, "Volrath's Curse", "Tempest", "TMP");
  }
}

module.exports = VolrathsCurse;
