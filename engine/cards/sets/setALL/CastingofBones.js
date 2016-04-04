"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CastingofBones extends Card {
  constructor(game) {
    super(game, "Casting of Bones", "Alliances", "ALL");
  }
}

module.exports = CastingofBones;
