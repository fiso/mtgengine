"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Jilt extends Card {
  constructor(game) {
    super(game, "Jilt", "Apocalypse", "APC");
  }
}

module.exports = Jilt;
