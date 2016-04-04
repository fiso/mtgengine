"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeiroftheWilds extends Card {
  constructor(game) {
    super(game, "Heir of the Wilds", "Khans of Tarkir", "KTK");
  }
}

module.exports = HeiroftheWilds;
