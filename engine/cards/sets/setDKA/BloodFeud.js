"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodFeud extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Feud", "Dark Ascension", "DKA");
  }
}

module.exports = BloodFeud;
