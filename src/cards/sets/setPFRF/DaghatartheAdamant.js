"use strict";
const Constants = require ("../../../Constants");
const DaghatartheAdamantBase = require("../setFRF/DaghatartheAdamant");

class DaghatartheAdamant extends DaghatartheAdamantBase {
  constructor (game) {
    super(game, "Daghatar the Adamant", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = DaghatartheAdamant;
