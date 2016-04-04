"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Overburden extends Card {
  constructor(game) {
    super(game, "Overburden", "Prophecy", "PCY");
  }
}

module.exports = Overburden;
