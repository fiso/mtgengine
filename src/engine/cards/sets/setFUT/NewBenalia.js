"use strict";
const Constants = require ("../../../Constants");
const NewBenaliaBase = require("../setC18/NewBenalia");

class NewBenalia extends NewBenaliaBase {
  constructor (game) {
    super(game, "New Benalia", "Future Sight", "FUT");
  }
}

module.exports = NewBenalia;
