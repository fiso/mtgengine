"use strict";
const Constants = require ("../../../Constants");
const DreadReturnBase = require("../setDDQ/DreadReturn");

class DreadReturn extends DreadReturnBase {
  constructor (game) {
    super(game, "Dread Return", "Magic Online Promos", "PRM");
  }
}

module.exports = DreadReturn;
