"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunDroplet extends UnimplementedCard {
  constructor(game) {
    super(game, "Sun Droplet", "Archenemy", "ARC");
  }
}

module.exports = SunDroplet;
