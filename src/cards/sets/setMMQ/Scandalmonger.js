"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scandalmonger extends UnimplementedCard {
  constructor(game) {
    super(game, "Scandalmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Scandalmonger;
