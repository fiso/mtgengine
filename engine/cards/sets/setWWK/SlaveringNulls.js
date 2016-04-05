"use strict";
const Constants = require ("../../../Constants");
const SlaveringNullsBase = require("../setDDH/SlaveringNulls");

class SlaveringNulls extends SlaveringNullsBase {
  constructor(game) {
    super(game, "Slavering Nulls", "Worldwake", "WWK");
  }
}

module.exports = SlaveringNulls;
