"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReveredDead extends Card {
  constructor(game) {
    super(game, "Revered Dead", "Planar Chaos", "PLC");
  }
}

module.exports = ReveredDead;
