"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Wastes extends Card {
  constructor(game) {
    super(game, "Wastes", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Wastes;
