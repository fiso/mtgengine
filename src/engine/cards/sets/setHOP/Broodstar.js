"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Broodstar extends UnimplementedCard {
  constructor (game) {
    super(game, "Broodstar", "Planechase", "HOP");
  }
}

module.exports = Broodstar;
