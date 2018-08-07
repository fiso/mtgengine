"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necravolver extends UnimplementedCard {
  constructor (game) {
    super(game, "Necravolver", "Apocalypse", "APC");
  }
}

module.exports = Necravolver;
