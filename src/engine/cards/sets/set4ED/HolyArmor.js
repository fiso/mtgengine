"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Holy Armor", "Fourth Edition", "4ED");
  }
}

module.exports = HolyArmor;
