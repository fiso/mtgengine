"use strict";
const Constants = require ("../../../Constants");
const StaggershockBase = require("../setROE/Staggershock");

class Staggershock extends StaggershockBase {
  constructor(game) {
    super(game, "Staggershock", "WPN and Gateway", "pWPN");
  }
}

module.exports = Staggershock;
