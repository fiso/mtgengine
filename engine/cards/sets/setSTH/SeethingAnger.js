"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeethingAnger extends UnimplementedCard {
  constructor(game) {
    super(game, "Seething Anger", "Stronghold", "STH");
  }
}

module.exports = SeethingAnger;
