"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkylineCascade extends UnimplementedCard {
  constructor(game) {
    super(game, "Skyline Cascade", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SkylineCascade;
