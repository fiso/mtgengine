"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullFracture extends UnimplementedCard {
  constructor(game) {
    super(game, "Skull Fracture", "Odyssey", "ODY");
  }
}

module.exports = SkullFracture;
