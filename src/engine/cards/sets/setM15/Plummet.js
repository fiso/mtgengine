"use strict";
const Constants = require ("../../../Constants");
const PlummetBase = require("../setM19/Plummet");

class Plummet extends PlummetBase {
  constructor (game) {
    super(game, "Plummet", "Magic 2015", "M15");
  }
}

module.exports = Plummet;
