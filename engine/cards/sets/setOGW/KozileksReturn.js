"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KozileksReturn extends Card {
  constructor(game) {
    super(game, "Kozilek's Return", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KozileksReturn;
