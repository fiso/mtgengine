"use strict";
const Constants = require ("../../../Constants");
const StaggershockBase = require("../setIMA/Staggershock");

class Staggershock extends StaggershockBase {
  constructor (game) {
    super(game, "Staggershock", "Rise of the Eldrazi Promos", "PROE");
  }
}

module.exports = Staggershock;
