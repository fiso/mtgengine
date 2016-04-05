"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Riptide extends UnimplementedCard {
  constructor(game) {
    super(game, "Riptide", "The Dark", "DRK");
  }
}

module.exports = Riptide;
