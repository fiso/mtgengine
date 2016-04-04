"use strict";
const Constants = require ("../../../Constants");
const PlummetBase = require("../setARC/Plummet");

class Plummet extends PlummetBase {
  constructor(game) {
    super(game, "Plummet", "Magic 2011", "M11");
  }
}

module.exports = Plummet;
