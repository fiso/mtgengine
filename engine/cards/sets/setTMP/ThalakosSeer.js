"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThalakosSeer extends Card {
  constructor(game) {
    super(game, "Thalakos Seer", "Tempest", "TMP");
  }
}

module.exports = ThalakosSeer;
