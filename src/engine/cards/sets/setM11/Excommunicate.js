"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Excommunicate extends UnimplementedCard {
  constructor (game) {
    super(game, "Excommunicate", "Magic 2011", "M11");
  }
}

module.exports = Excommunicate;
