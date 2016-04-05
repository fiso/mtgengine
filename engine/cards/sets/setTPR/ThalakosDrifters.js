"use strict";
const Constants = require ("../../../Constants");
const ThalakosDriftersBase = require("../setEXO/ThalakosDrifters");

class ThalakosDrifters extends ThalakosDriftersBase {
  constructor(game) {
    super(game, "Thalakos Drifters", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosDrifters;
