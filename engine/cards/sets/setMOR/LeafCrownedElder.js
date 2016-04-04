"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeafCrownedElder extends Card {
  constructor(game) {
    super(game, "Leaf-Crowned Elder", "Morningtide", "MOR");
  }
}

module.exports = LeafCrownedElder;
