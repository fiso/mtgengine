"use strict";
const Constants = require ("../../../Constants");
const ThalakosSeerBase = require("../setTPR/ThalakosSeer");

class ThalakosSeer extends ThalakosSeerBase {
  constructor (game) {
    super(game, "Thalakos Seer", "Tempest", "TMP");
  }
}

module.exports = ThalakosSeer;
