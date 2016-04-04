"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CyclopsTyrant extends UnimplementedCard {
  constructor(game) {
    super(game, "Cyclops Tyrant", "Magic 2014 Core Set", "M14");
  }
}

module.exports = CyclopsTyrant;
