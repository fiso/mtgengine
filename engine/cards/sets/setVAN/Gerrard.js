"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gerrard extends UnimplementedCard {
  constructor(game) {
    super(game, "Gerrard", "Vanguard", "VAN");
  }
}

module.exports = Gerrard;
