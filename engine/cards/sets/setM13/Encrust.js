"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Encrust extends Card {
  constructor(game) {
    super(game, "Encrust", "Magic 2013", "M13");
  }
}

module.exports = Encrust;
