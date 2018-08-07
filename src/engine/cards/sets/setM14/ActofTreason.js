"use strict";
const Constants = require ("../../../Constants");
const ActofTreasonBase = require("../setM19/ActofTreason");

class ActofTreason extends ActofTreasonBase {
  constructor (game) {
    super(game, "Act of Treason", "Magic 2014", "M14");
  }
}

module.exports = ActofTreason;
