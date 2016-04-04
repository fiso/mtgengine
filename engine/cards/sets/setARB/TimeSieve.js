"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeSieve extends Card {
  constructor(game) {
    super(game, "Time Sieve", "Alara Reborn", "ARB");
  }
}

module.exports = TimeSieve;
