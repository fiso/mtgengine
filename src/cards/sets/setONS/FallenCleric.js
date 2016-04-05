"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FallenCleric extends UnimplementedCard {
  constructor(game) {
    super(game, "Fallen Cleric", "Onslaught", "ONS");
  }
}

module.exports = FallenCleric;
