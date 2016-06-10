"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gone extends UnimplementedCard {
  constructor (game) {
    super(game, "Gone", "Planar Chaos", "PLC");
  }
}

module.exports = Gone;
