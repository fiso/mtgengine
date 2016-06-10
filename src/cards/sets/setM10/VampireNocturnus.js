"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireNocturnus extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Nocturnus", "Magic 2010", "M10");
  }
}

module.exports = VampireNocturnus;
