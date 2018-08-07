"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitterheartWitch extends UnimplementedCard {
  constructor (game) {
    super(game, "Bitterheart Witch", "Innistrad", "ISD");
  }
}

module.exports = BitterheartWitch;
