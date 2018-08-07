"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndyingBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Undying Beast", "Portal", "POR");
  }
}

module.exports = UndyingBeast;
