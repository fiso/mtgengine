"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Excommunicate extends UnimplementedCard {
  constructor(game) {
    super(game, "Excommunicate", "Magic 2010", "M10");
  }
}

module.exports = Excommunicate;
