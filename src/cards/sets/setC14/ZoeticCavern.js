"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZoeticCavern extends UnimplementedCard {
  constructor (game) {
    super(game, "Zoetic Cavern", "Commander 2014", "C14");
  }
}

module.exports = ZoeticCavern;
