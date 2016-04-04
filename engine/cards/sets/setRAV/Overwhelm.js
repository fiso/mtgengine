"use strict";
const Constants = require ("../../../Constants");
const OverwhelmBase = require("../setM15/Overwhelm");

class Overwhelm extends OverwhelmBase {
  constructor(game) {
    super(game, "Overwhelm", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Overwhelm;
