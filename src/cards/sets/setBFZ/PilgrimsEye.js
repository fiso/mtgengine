"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PilgrimsEye extends UnimplementedCard {
  constructor (game) {
    super(game, "Pilgrim's Eye", "Battle for Zendikar", "BFZ");
  }
}

module.exports = PilgrimsEye;
