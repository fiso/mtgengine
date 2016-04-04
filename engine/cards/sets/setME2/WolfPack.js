"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WolfPack extends UnimplementedCard {
  constructor(game) {
    super(game, "Wolf Pack", "Masters Edition II", "ME2");
  }
}

module.exports = WolfPack;
