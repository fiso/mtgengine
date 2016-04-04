"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoralTricksterBase = require("../setDDN/CoralTrickster.js");

class CoralTrickster extends CoralTricksterBase {
  constructor(game) {
    super(game, "Coral Trickster", "Time Spiral", "TSP");
  }
}

module.exports = CoralTrickster;
