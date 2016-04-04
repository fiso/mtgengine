"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OtherworldlyJourney extends UnimplementedCard {
  constructor(game) {
    super(game, "Otherworldly Journey", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OtherworldlyJourney;
