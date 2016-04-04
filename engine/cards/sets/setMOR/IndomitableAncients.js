"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IndomitableAncients extends Card {
  constructor(game) {
    super(game, "Indomitable Ancients", "Morningtide", "MOR");
  }
}

module.exports = IndomitableAncients;
