"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozileksChanneler extends UnimplementedCard {
  constructor (game) {
    super(game, "Kozilek's Channeler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KozileksChanneler;
