"use strict";
const Constants = require ("../../../Constants");
const SkyshaperBase = require("../setEXO/Skyshaper");

class Skyshaper extends SkyshaperBase {
  constructor (game) {
    super(game, "Skyshaper", "Tempest Remastered", "TPR");
  }
}

module.exports = Skyshaper;
