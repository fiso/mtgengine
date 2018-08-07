"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenwardenofMurasa extends UnimplementedCard {
  constructor (game) {
    super(game, "Greenwarden of Murasa", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GreenwardenofMurasa;
