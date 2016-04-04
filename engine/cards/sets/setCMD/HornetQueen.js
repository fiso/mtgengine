"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HornetQueenBase = require("../setM15/HornetQueen.js");

class HornetQueen extends HornetQueenBase {
  constructor(game) {
    super(game, "Hornet Queen", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HornetQueen;
