"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarBehemoth extends UnimplementedCard {
  constructor (game) {
    super(game, "War Behemoth", "Khans of Tarkir", "KTK");
  }
}

module.exports = WarBehemoth;
