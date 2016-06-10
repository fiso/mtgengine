"use strict";
const Constants = require ("../../../Constants");
const NewBenaliaBase = require("../setC13/NewBenalia");

class NewBenalia extends NewBenaliaBase {
  constructor (game) {
    super(game, "New Benalia", "Commander 2015", "C15");
  }
}

module.exports = NewBenalia;
