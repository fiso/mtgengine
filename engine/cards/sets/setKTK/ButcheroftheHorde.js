"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ButcheroftheHorde extends Card {
  constructor(game) {
    super(game, "Butcher of the Horde", "Khans of Tarkir", "KTK");
  }
}

module.exports = ButcheroftheHorde;
