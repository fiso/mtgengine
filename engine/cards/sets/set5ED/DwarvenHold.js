"use strict";
const Constants = require ("../../../Constants");
const DwarvenHoldBase = require("../setFEM/DwarvenHold");

class DwarvenHold extends DwarvenHoldBase {
  constructor(game) {
    super(game, "Dwarven Hold", "Fifth Edition", "5ED");
  }
}

module.exports = DwarvenHold;
