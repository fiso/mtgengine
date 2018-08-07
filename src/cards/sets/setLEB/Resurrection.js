"use strict";
const Constants = require ("../../../Constants");
const ResurrectionBase = require("../setTD0/Resurrection");

class Resurrection extends ResurrectionBase {
  constructor (game) {
    super(game, "Resurrection", "Limited Edition Beta", "LEB");
  }
}

module.exports = Resurrection;
