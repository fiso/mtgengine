"use strict";
const Constants = require ("../../../Constants");
const OrochiColonyBase = require("../setPCA/OrochiColony");

class OrochiColony extends OrochiColonyBase {
  constructor (game) {
    super(game, "Orochi Colony", "Planechase 2012", "PC2");
  }
}

module.exports = OrochiColony;
