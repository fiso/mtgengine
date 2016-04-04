"use strict";
const Constants = require ("../../../Constants");
const PlummetBase = require("../setARC/Plummet");

class Plummet extends PlummetBase {
  constructor(game) {
    super(game, "Plummet", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Plummet;
