"use strict";
const Constants = require ("../../../Constants");
const StaggershockBase = require("../setIMA/Staggershock");

class Staggershock extends StaggershockBase {
  constructor (game) {
    super(game, "Staggershock", "Magic Online Promos", "PRM");
  }
}

module.exports = Staggershock;
