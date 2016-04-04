"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Narwhal extends Card {
  constructor(game) {
    super(game, "Narwhal", "Homelands", "HML");
  }
}

module.exports = Narwhal;
