"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThalakosDriftersBase = require("../setEXO/ThalakosDrifters.js");

class ThalakosDrifters extends ThalakosDriftersBase {
  constructor(game) {
    super(game, "Thalakos Drifters", "Vintage Masters", "VMA");
  }
}

module.exports = ThalakosDrifters;
