"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightTerrors extends UnimplementedCard {
  constructor (game) {
    super(game, "Night Terrors", "Innistrad", "ISD");
  }
}

module.exports = NightTerrors;
