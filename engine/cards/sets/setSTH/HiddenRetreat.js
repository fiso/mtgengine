"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiddenRetreat extends UnimplementedCard {
  constructor(game) {
    super(game, "Hidden Retreat", "Stronghold", "STH");
  }
}

module.exports = HiddenRetreat;
