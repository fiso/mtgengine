"use strict";
const Constants = require ("../../../Constants");
const PouncingJaguarBase = require("../setPRM/PouncingJaguar");

class PouncingJaguar extends PouncingJaguarBase {
  constructor (game) {
    super(game, "Pouncing Jaguar", "Arena League 1999", "PAL99");
  }
}

module.exports = PouncingJaguar;
