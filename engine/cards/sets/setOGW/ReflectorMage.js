"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReflectorMage extends Card {
  constructor(game) {
    super(game, "Reflector Mage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ReflectorMage;
