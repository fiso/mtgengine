"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LocustMiser extends Card {
  constructor(game) {
    super(game, "Locust Miser", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = LocustMiser;
