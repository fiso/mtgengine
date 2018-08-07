"use strict";
const Constants = require ("../../../Constants");
const DarkIntimationsBase = require("../setAER/DarkIntimations");

class DarkIntimations extends DarkIntimationsBase {
  constructor (game) {
    super(game, "Dark Intimations", "Aether Revolt Promos", "PAER");
  }
}

module.exports = DarkIntimations;
