"use strict";
const Constants = require ("../../../Constants");
const EagerConstructBase = require("../setBBD/EagerConstruct");

class EagerConstruct extends EagerConstructBase {
  constructor (game) {
    super(game, "Eager Construct", "Kaladesh", "KLD");
  }
}

module.exports = EagerConstruct;
