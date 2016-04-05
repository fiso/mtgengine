"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverWyvern extends UnimplementedCard {
  constructor(game) {
    super(game, "Silver Wyvern", "Stronghold", "STH");
  }
}

module.exports = SilverWyvern;
