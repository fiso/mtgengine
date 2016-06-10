"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GalvanicJuggernaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Galvanic Juggernaut", "Innistrad", "ISD");
  }
}

module.exports = GalvanicJuggernaut;
