"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OketrasMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Oketra's Monument", "Amonkhet", "AKH");
  }
}

module.exports = OketrasMonument;
