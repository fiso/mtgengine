"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonortheFallen extends UnimplementedCard {
  constructor(game) {
    super(game, "Honor the Fallen", "Mercadian Masques", "MMQ");
  }
}

module.exports = HonortheFallen;
