"use strict";
const Constants = require ("../../../Constants");
const CavalryPegasusBase = require("../setDDL/CavalryPegasus");

class CavalryPegasus extends CavalryPegasusBase {
  constructor (game) {
    super(game, "Cavalry Pegasus", "Theros", "THS");
  }
}

module.exports = CavalryPegasus;
