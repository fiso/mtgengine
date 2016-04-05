"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkObserver extends UnimplementedCard {
  constructor(game) {
    super(game, "Merfolk Observer", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MerfolkObserver;
