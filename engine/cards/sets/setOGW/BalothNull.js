"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalothNull extends Card {
  constructor(game) {
    super(game, "Baloth Null", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = BalothNull;
