"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowCoveredMountain extends UnimplementedCard {
  constructor(game) {
    super(game, "Snow-Covered Mountain", "Coldsnap", "CSP");
  }
}

module.exports = SnowCoveredMountain;
