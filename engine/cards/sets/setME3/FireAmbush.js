"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireAmbush extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Ambush", "Masters Edition III", "ME3");
  }
}

module.exports = FireAmbush;
