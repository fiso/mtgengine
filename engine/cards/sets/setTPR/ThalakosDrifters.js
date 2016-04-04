"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThalakosDriftersBase = require("../setEXO/ThalakosDrifters.js");

class ThalakosDrifters extends ThalakosDriftersBase {
  constructor(game) {
    super(game, "Thalakos Drifters", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosDrifters;
