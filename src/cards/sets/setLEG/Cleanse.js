"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cleanse extends UnimplementedCard {
  constructor (game) {
    super(game, "Cleanse", "Legends", "LEG");
  }
}

module.exports = Cleanse;
