"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PteronGhost extends Card {
  constructor(game) {
    super(game, "Pteron Ghost", "Darksteel", "DST");
  }
}

module.exports = PteronGhost;
