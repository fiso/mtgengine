"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderSeer extends Card {
  constructor(game) {
    super(game, "Cinder Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = CinderSeer;
