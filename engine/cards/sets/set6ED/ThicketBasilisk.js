"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThicketBasilisk extends Card {
  constructor(game) {
    super(game, "Thicket Basilisk", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ThicketBasilisk;
