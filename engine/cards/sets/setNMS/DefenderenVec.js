"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefenderenVec extends Card {
  constructor(game) {
    super(game, "Defender en-Vec", "Nemesis", "NMS");
  }
}

module.exports = DefenderenVec;
