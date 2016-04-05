"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChangeofHeart extends UnimplementedCard {
  constructor(game) {
    super(game, "Change of Heart", "Stronghold", "STH");
  }
}

module.exports = ChangeofHeart;
