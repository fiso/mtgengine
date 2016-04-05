"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necropolis extends UnimplementedCard {
  constructor(game) {
    super(game, "Necropolis", "The Dark", "DRK");
  }
}

module.exports = Necropolis;
