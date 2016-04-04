"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodCultist extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Cultist", "Shards of Alara", "ALA");
  }
}

module.exports = BloodCultist;
