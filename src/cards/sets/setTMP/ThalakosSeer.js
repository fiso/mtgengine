"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThalakosSeer extends UnimplementedCard {
  constructor (game) {
    super(game, "Thalakos Seer", "Tempest", "TMP");
  }
}

module.exports = ThalakosSeer;
