"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodpyreElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodpyre Elemental", "Shards of Alara", "ALA");
  }
}

module.exports = BloodpyreElemental;
