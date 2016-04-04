"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SealofRemoval extends Card {
  constructor(game) {
    super(game, "Seal of Removal", "Nemesis", "NMS");
  }
}

module.exports = SealofRemoval;
