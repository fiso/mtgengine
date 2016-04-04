"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpottedGriffin extends Card {
  constructor(game) {
    super(game, "Spotted Griffin", "Masters Edition IV", "ME4");
  }
}

module.exports = SpottedGriffin;
