"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Banshee extends UnimplementedCard {
  constructor (game) {
    super(game, "Banshee", "Chronicles", "CHR");
  }
}

module.exports = Banshee;
