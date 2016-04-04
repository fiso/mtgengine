"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OvergrownEstate extends Card {
  constructor(game) {
    super(game, "Overgrown Estate", "Apocalypse", "APC");
  }
}

module.exports = OvergrownEstate;
