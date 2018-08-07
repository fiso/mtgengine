"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranWeaponry extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Weaponry", "Urza's Legacy", "ULG");
  }
}

module.exports = ThranWeaponry;
