"use strict";
const Constants = require ("../../../Constants");
const DreadReturnBase = require("../setDDQ/DreadReturn");

class DreadReturn extends DreadReturnBase {
  constructor (game) {
    super(game, "Dread Return", "Time Spiral", "TSP");
  }
}

module.exports = DreadReturn;
