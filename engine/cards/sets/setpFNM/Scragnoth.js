"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scragnoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Scragnoth", "Friday Night Magic", "pFNM");
  }
}

module.exports = Scragnoth;
