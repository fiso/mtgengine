"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Undo extends UnimplementedCard {
  constructor (game) {
    super(game, "Undo", "Starter 1999", "S99");
  }
}

module.exports = Undo;
