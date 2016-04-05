"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cryoclasm extends UnimplementedCard {
  constructor(game) {
    super(game, "Cryoclasm", "Coldsnap", "CSP");
  }
}

module.exports = Cryoclasm;
