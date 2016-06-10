"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightRevelers extends UnimplementedCard {
  constructor (game) {
    super(game, "Night Revelers", "Innistrad", "ISD");
  }
}

module.exports = NightRevelers;
