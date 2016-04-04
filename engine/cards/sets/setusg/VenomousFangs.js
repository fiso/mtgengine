"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VenomousFangs extends Card {
  constructor(game) {
    super(game, "Venomous Fangs", "Urza's Saga", "USG");
  }
}

module.exports = VenomousFangs;
