"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonFodder extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Fodder", "Modern Masters 2017", "MM3");
  }
}

module.exports = DragonFodder;
