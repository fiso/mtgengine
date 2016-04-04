"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReefShaman extends Card {
  constructor(game) {
    super(game, "Reef Shaman", "Apocalypse", "APC");
  }
}

module.exports = ReefShaman;
