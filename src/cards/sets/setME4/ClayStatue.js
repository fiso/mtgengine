"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClayStatue extends UnimplementedCard {
  constructor (game) {
    super(game, "Clay Statue", "Masters Edition IV", "ME4");
  }
}

module.exports = ClayStatue;
