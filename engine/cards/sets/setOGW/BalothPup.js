"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalothPup extends Card {
  constructor(game) {
    super(game, "Baloth Pup", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BalothPup;
