"use strict";
const Constants = require ("../../../Constants");
const AssaultBase = require("../setINV/Assault");

class Assault extends AssaultBase {
  constructor (game) {
    super(game, "Assault", "Planechase", "HOP");
  }
}

module.exports = Assault;
