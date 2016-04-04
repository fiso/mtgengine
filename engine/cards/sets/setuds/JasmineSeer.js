"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JasmineSeer extends Card {
  constructor(game) {
    super(game, "Jasmine Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = JasmineSeer;
