"use strict";
const Constants = require ("../../../Constants");
const ActofTreasonBase = require("../setDDN/ActofTreason");

class ActofTreason extends ActofTreasonBase {
  constructor (game) {
    super(game, "Act of Treason", "Magic 2011", "M11");
  }
}

module.exports = ActofTreason;
