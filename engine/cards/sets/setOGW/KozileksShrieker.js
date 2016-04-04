"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KozileksShrieker extends Card {
  constructor(game) {
    super(game, "Kozilek's Shrieker", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KozileksShrieker;
