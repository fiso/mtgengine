"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlisteringFirecat extends UnimplementedCard {
  constructor(game) {
    super(game, "Blistering Firecat", "Onslaught", "ONS");
  }
}

module.exports = BlisteringFirecat;
