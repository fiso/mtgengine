"use strict";
const Constants = require ("../../../Constants");
const DespiseBase = require("../setKTK/Despise");

class Despise extends DespiseBase {
  constructor (game) {
    super(game, "Despise", "Friday Night Magic 2012", "F12");
  }
}

module.exports = Despise;
