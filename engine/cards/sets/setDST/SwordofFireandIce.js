"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordofFireandIce extends UnimplementedCard {
  constructor(game) {
    super(game, "Sword of Fire and Ice", "Darksteel", "DST");
  }
}

module.exports = SwordofFireandIce;
