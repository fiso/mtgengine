"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CavalryPegasusBase = require("../setDDL/CavalryPegasus.js");

class CavalryPegasus extends CavalryPegasusBase {
  constructor(game) {
    super(game, "Cavalry Pegasus", "Theros", "THS");
  }
}

module.exports = CavalryPegasus;
