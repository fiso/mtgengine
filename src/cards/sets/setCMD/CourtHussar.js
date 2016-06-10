"use strict";
const Constants = require ("../../../Constants");
const CourtHussarBase = require("../setDIS/CourtHussar");

class CourtHussar extends CourtHussarBase {
  constructor (game) {
    super(game, "Court Hussar", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = CourtHussar;
