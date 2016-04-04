"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrimstoneDragon extends Card {
  constructor(game) {
    super(game, "Brimstone Dragon", "Masters Edition II", "ME2");
  }
}

module.exports = BrimstoneDragon;
