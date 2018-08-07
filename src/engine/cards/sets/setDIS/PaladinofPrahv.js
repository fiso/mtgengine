"use strict";
const Constants = require ("../../../Constants");
const PaladinofPrahvBase = require("../setDDG/PaladinofPrahv");

class PaladinofPrahv extends PaladinofPrahvBase {
  constructor (game) {
    super(game, "Paladin of Prahv", "Dissension", "DIS");
  }
}

module.exports = PaladinofPrahv;
