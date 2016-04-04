"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwampMosquito extends Card {
  constructor(game) {
    super(game, "Swamp Mosquito", "Alliances", "ALL");
  }
}

module.exports = SwampMosquito;
