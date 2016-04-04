"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Twincast extends Card {
  constructor(game) {
    super(game, "Twincast", "Magic 2010", "M10");
  }
}

module.exports = Twincast;
