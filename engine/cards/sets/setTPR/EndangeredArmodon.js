"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EndangeredArmodonBase = require("../setSTH/EndangeredArmodon.js");

class EndangeredArmodon extends EndangeredArmodonBase {
  constructor(game) {
    super(game, "Endangered Armodon", "Tempest Remastered", "TPR");
  }
}

module.exports = EndangeredArmodon;
