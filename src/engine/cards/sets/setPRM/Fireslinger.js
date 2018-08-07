"use strict";
const Constants = require ("../../../Constants");
const FireslingerBase = require("../setJVC/Fireslinger");

class Fireslinger extends FireslingerBase {
  constructor (game) {
    super(game, "Fireslinger", "Magic Online Promos", "PRM");
  }
}

module.exports = Fireslinger;
