"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreeforAll extends UnimplementedCard {
  constructor(game) {
    super(game, "Free-for-All", "Unglued", "UGL");
  }
}

module.exports = FreeforAll;
