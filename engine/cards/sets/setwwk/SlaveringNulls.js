"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlaveringNullsBase = require("../setDDH/SlaveringNulls.js");

class SlaveringNulls extends SlaveringNullsBase {
  constructor(game) {
    super(game, "Slavering Nulls", "Worldwake", "WWK");
  }
}

module.exports = SlaveringNulls;
