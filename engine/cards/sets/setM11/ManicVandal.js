"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManicVandal extends Card {
  constructor(game) {
    super(game, "Manic Vandal", "Magic 2011", "M11");
  }
}

module.exports = ManicVandal;
