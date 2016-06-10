"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoltariChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Soltari Champion", "Stronghold", "STH");
  }
}

module.exports = SoltariChampion;
