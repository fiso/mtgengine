"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreshMeat extends Card {
  constructor(game) {
    super(game, "Fresh Meat", "Commander 2014", "C14");
  }
}

module.exports = FreshMeat;
