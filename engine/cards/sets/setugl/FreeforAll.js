"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FreeforAll extends Card {
  constructor(game) {
    super(game, "Free-for-All", "Unglued", "UGL");
  }
}

module.exports = FreeforAll;
