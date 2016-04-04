"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HavocSower extends Card {
  constructor(game) {
    super(game, "Havoc Sower", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = HavocSower;
