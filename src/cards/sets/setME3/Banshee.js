"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Banshee extends UnimplementedCard {
  constructor (game) {
    super(game, "Banshee", "Masters Edition III", "ME3");
  }
}

module.exports = Banshee;
