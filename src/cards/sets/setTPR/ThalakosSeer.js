"use strict";
const Constants = require ("../../../Constants");
const ThalakosSeerBase = require("../setTMP/ThalakosSeer");

class ThalakosSeer extends ThalakosSeerBase {
  constructor (game) {
    super(game, "Thalakos Seer", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosSeer;
