"use strict";
const Constants = require ("../../../Constants");
const ActofTreasonBase = require("../setM19/ActofTreason");

class ActofTreason extends ActofTreasonBase {
  constructor (game) {
    super(game, "Act of Treason", "Magic 2012", "M12");
  }
}

module.exports = ActofTreason;
