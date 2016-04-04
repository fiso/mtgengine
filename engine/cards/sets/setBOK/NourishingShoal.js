"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NourishingShoal extends Card {
  constructor(game) {
    super(game, "Nourishing Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = NourishingShoal;
