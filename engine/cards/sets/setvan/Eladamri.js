"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Eladamri extends UnimplementedCard {
  constructor(game) {
    super(game, "Eladamri", "Vanguard", "VAN");
  }
}

module.exports = Eladamri;
