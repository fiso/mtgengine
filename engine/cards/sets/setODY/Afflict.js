"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Afflict extends UnimplementedCard {
  constructor(game) {
    super(game, "Afflict", "Odyssey", "ODY");
  }
}

module.exports = Afflict;
