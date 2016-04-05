"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dodecapod extends UnimplementedCard {
  constructor(game) {
    super(game, "Dodecapod", "Apocalypse", "APC");
  }
}

module.exports = Dodecapod;
