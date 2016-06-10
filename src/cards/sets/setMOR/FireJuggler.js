"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireJuggler extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Juggler", "Morningtide", "MOR");
  }
}

module.exports = FireJuggler;
