"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PawnofUlamogBase = require("../setDDP/PawnofUlamog.js");

class PawnofUlamog extends PawnofUlamogBase {
  constructor(game) {
    super(game, "Pawn of Ulamog", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PawnofUlamog;
