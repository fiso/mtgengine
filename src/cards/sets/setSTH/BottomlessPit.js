"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BottomlessPit extends UnimplementedCard {
  constructor(game) {
    super(game, "Bottomless Pit", "Stronghold", "STH");
  }
}

module.exports = BottomlessPit;
