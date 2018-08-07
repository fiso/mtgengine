"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sailmonger extends UnimplementedCard {
  constructor (game) {
    super(game, "Sailmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Sailmonger;
