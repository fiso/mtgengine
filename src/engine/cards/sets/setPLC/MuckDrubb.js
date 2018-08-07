"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuckDrubb extends UnimplementedCard {
  constructor (game) {
    super(game, "Muck Drubb", "Planar Chaos", "PLC");
  }
}

module.exports = MuckDrubb;
