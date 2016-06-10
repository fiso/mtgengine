"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wildcall extends UnimplementedCard {
  constructor (game) {
    super(game, "Wildcall", "Fate Reforged", "FRF");
  }
}

module.exports = Wildcall;
