"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodwaterDam extends UnimplementedCard {
  constructor (game) {
    super(game, "Floodwater Dam", "Masters Edition IV", "ME4");
  }
}

module.exports = FloodwaterDam;
