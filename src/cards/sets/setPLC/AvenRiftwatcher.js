"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenRiftwatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Riftwatcher", "Planar Chaos", "PLC");
  }
}

module.exports = AvenRiftwatcher;
