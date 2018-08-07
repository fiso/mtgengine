"use strict";
const Constants = require ("../../../Constants");
const NewBenaliaBase = require("../setC18/NewBenalia");

class NewBenalia extends NewBenaliaBase {
  constructor (game) {
    super(game, "New Benalia", "Commander 2013", "C13");
  }
}

module.exports = NewBenalia;
