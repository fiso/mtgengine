"use strict";
const Constants = require ("../../../Constants");
const DespiseBase = require("../setKTK/Despise");

class Despise extends DespiseBase {
  constructor (game) {
    super(game, "Despise", "Magic Online Promos", "PRM");
  }
}

module.exports = Despise;
