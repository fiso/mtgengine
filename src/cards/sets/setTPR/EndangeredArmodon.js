"use strict";
const Constants = require ("../../../Constants");
const EndangeredArmodonBase = require("../setSTH/EndangeredArmodon");

class EndangeredArmodon extends EndangeredArmodonBase {
  constructor (game) {
    super(game, "Endangered Armodon", "Tempest Remastered", "TPR");
  }
}

module.exports = EndangeredArmodon;
