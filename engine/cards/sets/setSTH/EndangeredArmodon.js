"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndangeredArmodon extends UnimplementedCard {
  constructor(game) {
    super(game, "Endangered Armodon", "Stronghold", "STH");
  }
}

module.exports = EndangeredArmodon;
