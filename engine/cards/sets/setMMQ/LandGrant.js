"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LandGrant extends Card {
  constructor(game) {
    super(game, "Land Grant", "Mercadian Masques", "MMQ");
  }
}

module.exports = LandGrant;
