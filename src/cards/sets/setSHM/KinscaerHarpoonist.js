"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KinscaerHarpoonist extends UnimplementedCard {
  constructor (game) {
    super(game, "Kinscaer Harpoonist", "Shadowmoor", "SHM");
  }
}

module.exports = KinscaerHarpoonist;
