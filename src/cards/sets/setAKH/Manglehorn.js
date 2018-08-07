"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manglehorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Manglehorn", "Amonkhet", "AKH");
  }
}

module.exports = Manglehorn;
