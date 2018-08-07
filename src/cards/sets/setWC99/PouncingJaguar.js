"use strict";
const Constants = require ("../../../Constants");
const PouncingJaguarBase = require("../setPRM/PouncingJaguar");

class PouncingJaguar extends PouncingJaguarBase {
  constructor (game) {
    super(game, "Pouncing Jaguar", "World Championship Decks 1999", "WC99");
  }
}

module.exports = PouncingJaguar;
