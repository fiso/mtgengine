"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiftsUngiven extends Card {
  constructor(game) {
    super(game, "Gifts Ungiven", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GiftsUngiven;
