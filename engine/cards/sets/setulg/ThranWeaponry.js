"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranWeaponry extends Card {
  constructor(game) {
    super(game, "Thran Weaponry", "Urza's Legacy", "ULG");
  }
}

module.exports = ThranWeaponry;
