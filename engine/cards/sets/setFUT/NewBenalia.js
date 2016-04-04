"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NewBenaliaBase = require("../setC13/NewBenalia.js");

class NewBenalia extends NewBenaliaBase {
  constructor(game) {
    super(game, "New Benalia", "Future Sight", "FUT");
  }
}

module.exports = NewBenalia;
