"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WolfPack extends Card {
  constructor(game) {
    super(game, "Wolf Pack", "Masters Edition II", "ME2");
  }
}

module.exports = WolfPack;
