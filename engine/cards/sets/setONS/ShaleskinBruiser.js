"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShaleskinBruiser extends Card {
  constructor(game) {
    super(game, "Shaleskin Bruiser", "Onslaught", "ONS");
  }
}

module.exports = ShaleskinBruiser;
