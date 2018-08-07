"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimeSieve extends UnimplementedCard {
  constructor (game) {
    super(game, "Time Sieve", "Alara Reborn", "ARB");
  }
}

module.exports = TimeSieve;
