"use strict";
const Constants = require ("../../../Constants");
const StrangleholdBase = require("../setCMA/Stranglehold");

class Stranglehold extends StrangleholdBase {
  constructor (game) {
    super(game, "Stranglehold", "Commander 2011", "CMD");
  }
}

module.exports = Stranglehold;
