"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OverwhelmingDenial extends Card {
  constructor(game) {
    super(game, "Overwhelming Denial", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OverwhelmingDenial;
