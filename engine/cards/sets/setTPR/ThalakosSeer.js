"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThalakosSeerBase = require("../setTMP/ThalakosSeer.js");

class ThalakosSeer extends ThalakosSeerBase {
  constructor(game) {
    super(game, "Thalakos Seer", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosSeer;
