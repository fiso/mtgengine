"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenShrine extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Shrine", "Odyssey", "ODY");
  }
}

module.exports = AvenShrine;
