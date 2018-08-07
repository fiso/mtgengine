"use strict";
const Constants = require ("../../../Constants");
const IndrikStomphowlerBase = require("../setCMA/IndrikStomphowler");

class IndrikStomphowler extends IndrikStomphowlerBase {
  constructor (game) {
    super(game, "Indrik Stomphowler", "Dissension", "DIS");
  }
}

module.exports = IndrikStomphowler;
