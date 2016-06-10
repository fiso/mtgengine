"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikeDrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Spike Drone", "Tempest", "TMP");
  }
}

module.exports = SpikeDrone;
