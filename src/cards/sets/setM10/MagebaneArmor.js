"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagebaneArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Magebane Armor", "Magic 2010", "M10");
  }
}

module.exports = MagebaneArmor;
