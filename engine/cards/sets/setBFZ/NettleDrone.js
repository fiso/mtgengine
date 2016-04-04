"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NettleDrone extends UnimplementedCard {
  constructor(game) {
    super(game, "Nettle Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = NettleDrone;
