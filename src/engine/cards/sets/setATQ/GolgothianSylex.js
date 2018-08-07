"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgothianSylex extends UnimplementedCard {
  constructor (game) {
    super(game, "Golgothian Sylex", "Antiquities", "ATQ");
  }
}

module.exports = GolgothianSylex;
