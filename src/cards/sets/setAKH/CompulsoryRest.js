"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CompulsoryRest extends UnimplementedCard {
  constructor (game) {
    super(game, "Compulsory Rest", "Amonkhet", "AKH");
  }
}

module.exports = CompulsoryRest;
