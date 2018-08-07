"use strict";
const Constants = require ("../../../Constants");
const SkyshaperBase = require("../setTPR/Skyshaper");

class Skyshaper extends SkyshaperBase {
  constructor (game) {
    super(game, "Skyshaper", "Exodus", "EXO");
  }
}

module.exports = Skyshaper;
