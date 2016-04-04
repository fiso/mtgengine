"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlazingShoal extends Card {
  constructor(game) {
    super(game, "Blazing Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BlazingShoal;
