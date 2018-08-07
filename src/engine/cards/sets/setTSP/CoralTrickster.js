"use strict";
const Constants = require ("../../../Constants");
const CoralTricksterBase = require("../setDDN/CoralTrickster");

class CoralTrickster extends CoralTricksterBase {
  constructor (game) {
    super(game, "Coral Trickster", "Time Spiral", "TSP");
  }
}

module.exports = CoralTrickster;
