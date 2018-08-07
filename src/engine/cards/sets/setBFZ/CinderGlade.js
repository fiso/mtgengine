"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderGlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Glade", "Battle for Zendikar", "BFZ");
  }
}

module.exports = CinderGlade;
