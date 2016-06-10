"use strict";
const Constants = require ("../../../Constants");
const ActofTreasonBase = require("../setDDN/ActofTreason");

class ActofTreason extends ActofTreasonBase {
  constructor (game) {
    super(game, "Act of Treason", "Magic Origins", "ORI");
  }
}

module.exports = ActofTreason;
