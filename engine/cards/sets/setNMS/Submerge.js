"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Submerge extends Card {
  constructor(game) {
    super(game, "Submerge", "Nemesis", "NMS");
  }
}

module.exports = Submerge;
