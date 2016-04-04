"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HolyArmor extends UnimplementedCard {
  constructor(game) {
    super(game, "Holy Armor", "Collector's Edition", "CED");
  }
}

module.exports = HolyArmor;
