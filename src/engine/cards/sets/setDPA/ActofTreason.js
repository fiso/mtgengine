"use strict";
const Constants = require ("../../../Constants");
const ActofTreasonBase = require("../setM19/ActofTreason");

class ActofTreason extends ActofTreasonBase {
  constructor (game) {
    super(game, "Act of Treason", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ActofTreason;
