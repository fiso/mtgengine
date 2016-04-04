"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OathofChandra extends Card {
  constructor(game) {
    super(game, "Oath of Chandra", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OathofChandra;
