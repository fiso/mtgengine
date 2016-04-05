"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidShrine extends UnimplementedCard {
  constructor(game) {
    super(game, "Cephalid Shrine", "Odyssey", "ODY");
  }
}

module.exports = CephalidShrine;
