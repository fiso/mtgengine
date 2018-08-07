"use strict";
const Constants = require ("../../../Constants");
const DreadReturnBase = require("../setDDQ/DreadReturn");

class DreadReturn extends DreadReturnBase {
  constructor (game) {
    super(game, "Dread Return", "Commander 2014", "C14");
  }
}

module.exports = DreadReturn;
