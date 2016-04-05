"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeafCrownedElder extends UnimplementedCard {
  constructor(game) {
    super(game, "Leaf-Crowned Elder", "Morningtide", "MOR");
  }
}

module.exports = LeafCrownedElder;
