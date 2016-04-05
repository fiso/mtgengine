"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaskoftheMimic extends UnimplementedCard {
  constructor(game) {
    super(game, "Mask of the Mimic", "Stronghold", "STH");
  }
}

module.exports = MaskoftheMimic;
