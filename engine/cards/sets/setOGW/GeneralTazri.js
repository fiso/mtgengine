"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GeneralTazri extends Card {
  constructor(game) {
    super(game, "General Tazri", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GeneralTazri;
