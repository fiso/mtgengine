"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaleWayfarer extends UnimplementedCard {
  constructor (game) {
    super(game, "Pale Wayfarer", "Shadowmoor", "SHM");
  }
}

module.exports = PaleWayfarer;
