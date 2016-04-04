"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KingCheetah extends Card {
  constructor(game) {
    super(game, "King Cheetah", "Multiverse Gift Box", "MGB");
  }
}

module.exports = KingCheetah;
