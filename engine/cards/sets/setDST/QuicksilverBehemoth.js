"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverBehemoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Quicksilver Behemoth", "Darksteel", "DST");
  }
}

module.exports = QuicksilverBehemoth;
