"use strict";
const Constants = require ("../../../Constants");
const ActofTreasonBase = require("../setDDN/ActofTreason");

class ActofTreason extends ActofTreasonBase {
  constructor (game) {
    super(game, "Act of Treason", "Khans of Tarkir", "KTK");
  }
}

module.exports = ActofTreason;
