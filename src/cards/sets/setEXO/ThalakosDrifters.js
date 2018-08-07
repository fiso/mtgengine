"use strict";
const Constants = require ("../../../Constants");
const ThalakosDriftersBase = require("../setTPR/ThalakosDrifters");

class ThalakosDrifters extends ThalakosDriftersBase {
  constructor (game) {
    super(game, "Thalakos Drifters", "Exodus", "EXO");
  }
}

module.exports = ThalakosDrifters;
