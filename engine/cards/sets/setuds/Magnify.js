"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Magnify extends Card {
  constructor(game) {
    super(game, "Magnify", "Urza's Destiny", "UDS");
  }
}

module.exports = Magnify;
