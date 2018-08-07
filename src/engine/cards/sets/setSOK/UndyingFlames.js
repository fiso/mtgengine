"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndyingFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Undying Flames", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = UndyingFlames;
