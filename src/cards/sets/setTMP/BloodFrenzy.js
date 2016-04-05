"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodFrenzy extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Frenzy", "Tempest", "TMP");
  }
}

module.exports = BloodFrenzy;
