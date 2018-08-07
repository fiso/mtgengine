"use strict";
const Constants = require ("../../../Constants");
const IndrikStomphowlerBase = require("../setCMA/IndrikStomphowler");

class IndrikStomphowler extends IndrikStomphowlerBase {
  constructor (game) {
    super(game, "Indrik Stomphowler", "Commander 2015", "C15");
  }
}

module.exports = IndrikStomphowler;
