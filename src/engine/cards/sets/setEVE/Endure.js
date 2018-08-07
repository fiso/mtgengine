"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Endure extends UnimplementedCard {
  constructor (game) {
    super(game, "Endure", "Eventide", "EVE");
  }
}

module.exports = Endure;
