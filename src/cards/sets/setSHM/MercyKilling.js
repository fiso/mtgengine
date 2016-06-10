"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MercyKilling extends UnimplementedCard {
  constructor (game) {
    super(game, "Mercy Killing", "Shadowmoor", "SHM");
  }
}

module.exports = MercyKilling;
