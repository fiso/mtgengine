"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whipcorder extends UnimplementedCard {
  constructor(game) {
    super(game, "Whipcorder", "Friday Night Magic", "pFNM");
  }
}

module.exports = Whipcorder;
