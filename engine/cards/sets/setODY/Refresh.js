"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Refresh extends UnimplementedCard {
  constructor(game) {
    super(game, "Refresh", "Odyssey", "ODY");
  }
}

module.exports = Refresh;
