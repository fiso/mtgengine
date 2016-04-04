"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PilgrimofVirtue extends UnimplementedCard {
  constructor(game) {
    super(game, "Pilgrim of Virtue", "Odyssey", "ODY");
  }
}

module.exports = PilgrimofVirtue;
