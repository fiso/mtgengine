"use strict";
const Constants = require ("../../../Constants");
const EmberHaulerBase = require("../setDDT/EmberHauler");

class EmberHauler extends EmberHaulerBase {
  constructor (game) {
    super(game, "Ember Hauler", "Magic 2011", "M11");
  }
}

module.exports = EmberHauler;
