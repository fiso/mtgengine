"use strict";
const Constants = require ("../../../Constants");
const FireslingerBase = require("../setDD3_JVC/Fireslinger");

class Fireslinger extends FireslingerBase {
  constructor(game) {
    super(game, "Fireslinger", "Friday Night Magic", "pFNM");
  }
}

module.exports = Fireslinger;
