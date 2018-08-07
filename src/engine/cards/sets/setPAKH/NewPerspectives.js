"use strict";
const Constants = require ("../../../Constants");
const NewPerspectivesBase = require("../setAKH/NewPerspectives");

class NewPerspectives extends NewPerspectivesBase {
  constructor (game) {
    super(game, "New Perspectives", "Amonkhet Promos", "PAKH");
  }
}

module.exports = NewPerspectives;
