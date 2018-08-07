"use strict";
const Constants = require ("../../../Constants");
const ElderwoodScionBase = require("../setC18/ElderwoodScion");

class ElderwoodScion extends ElderwoodScionBase {
  constructor (game) {
    super(game, "Elderwood Scion", "Planechase 2012", "PC2");
  }
}

module.exports = ElderwoodScion;
