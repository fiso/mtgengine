"use strict";
const Constants = require ("../../../Constants");
const FireslingerBase = require("../setJVC/Fireslinger");

class Fireslinger extends FireslingerBase {
  constructor (game) {
    super(game, "Fireslinger", "Friday Night Magic 2002", "F02");
  }
}

module.exports = Fireslinger;
