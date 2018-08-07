"use strict";
const Constants = require ("../../../Constants");
const PlummetBase = require("../setM19/Plummet");

class Plummet extends PlummetBase {
  constructor (game) {
    super(game, "Plummet", "Magic 2013", "M13");
  }
}

module.exports = Plummet;
