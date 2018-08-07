"use strict";
const Constants = require ("../../../Constants");
const CourtHussarBase = require("../setA25/CourtHussar");

class CourtHussar extends CourtHussarBase {
  constructor (game) {
    super(game, "Court Hussar", "Commander 2011", "CMD");
  }
}

module.exports = CourtHussar;
