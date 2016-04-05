"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StompingSlabs extends UnimplementedCard {
  constructor(game) {
    super(game, "Stomping Slabs", "Morningtide", "MOR");
  }
}

module.exports = StompingSlabs;
