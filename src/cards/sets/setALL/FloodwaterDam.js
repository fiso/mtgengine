"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FloodwaterDam extends UnimplementedCard {
  constructor (game) {
    super(game, "Floodwater Dam", "Alliances", "ALL");
  }
}

module.exports = FloodwaterDam;
