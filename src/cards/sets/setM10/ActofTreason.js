"use strict";
const Constants = require ("../../../Constants");
const ActofTreasonBase = require("../setDDN/ActofTreason");

class ActofTreason extends ActofTreasonBase {
  constructor(game) {
    super(game, "Act of Treason", "Magic 2010", "M10");
  }
}

module.exports = ActofTreason;
