"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Windfall extends UnimplementedCard {
  constructor (game) {
    super(game, "Windfall", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Windfall;
