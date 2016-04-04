"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GalvanicArc extends Card {
  constructor(game) {
    super(game, "Galvanic Arc", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GalvanicArc;
