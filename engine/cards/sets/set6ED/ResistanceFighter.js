"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ResistanceFighter extends Card {
  constructor(game) {
    super(game, "Resistance Fighter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ResistanceFighter;
