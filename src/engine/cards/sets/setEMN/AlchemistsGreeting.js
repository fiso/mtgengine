"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlchemistsGreeting extends UnimplementedCard {
  constructor (game) {
    super(game, "Alchemist's Greeting", "Eldritch Moon", "EMN");
  }
}

module.exports = AlchemistsGreeting;
