"use strict";
const Constants = require ("../../../Constants");
const PouncingJaguarBase = require("../setpARL/PouncingJaguar");

class PouncingJaguar extends PouncingJaguarBase {
  constructor(game) {
    super(game, "Pouncing Jaguar", "Urza's Saga", "USG");
  }
}

module.exports = PouncingJaguar;
