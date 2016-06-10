"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarMammoth extends UnimplementedCard {
  constructor (game) {
    super(game, "War Mammoth", "Collector's Edition", "CED");
  }
}

module.exports = WarMammoth;
