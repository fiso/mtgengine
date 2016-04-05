"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HordeofBoggarts extends UnimplementedCard {
  constructor(game) {
    super(game, "Horde of Boggarts", "Shadowmoor", "SHM");
  }
}

module.exports = HordeofBoggarts;
