"use strict";
const Constants = require ("../../../Constants");
const WaterknotBase = require("../setMTGA/Waterknot");

class Waterknot extends WaterknotBase {
  constructor (game) {
    super(game, "Waterknot", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Waterknot;
