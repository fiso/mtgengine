"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BirthingHulk extends Card {
  constructor(game) {
    super(game, "Birthing Hulk", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BirthingHulk;
