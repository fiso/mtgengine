"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NovaCleric extends UnimplementedCard {
  constructor(game) {
    super(game, "Nova Cleric", "Onslaught", "ONS");
  }
}

module.exports = NovaCleric;
