"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stonehands extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonehands", "Masters Edition II", "ME2");
  }
}

module.exports = Stonehands;
