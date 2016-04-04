"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoidShatter extends Card {
  constructor(game) {
    super(game, "Void Shatter", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = VoidShatter;
