"use strict";
const Constants = require ("../../../Constants");
const TwistedAbominationBase = require("../setA25/TwistedAbomination");

class TwistedAbomination extends TwistedAbominationBase {
  constructor (game) {
    super(game, "Twisted Abomination", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = TwistedAbomination;
