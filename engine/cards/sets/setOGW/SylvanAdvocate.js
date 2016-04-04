"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvanAdvocate extends Card {
  constructor(game) {
    super(game, "Sylvan Advocate", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SylvanAdvocate;
