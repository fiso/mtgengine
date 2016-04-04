"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MakeshiftMannequin extends Card {
  constructor(game) {
    super(game, "Makeshift Mannequin", "Archenemy", "ARC");
  }
}

module.exports = MakeshiftMannequin;
