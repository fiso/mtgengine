"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireJuggler extends Card {
  constructor(game) {
    super(game, "Fire Juggler", "Morningtide", "MOR");
  }
}

module.exports = FireJuggler;
