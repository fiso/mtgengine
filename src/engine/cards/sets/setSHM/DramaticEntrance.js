"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DramaticEntrance extends UnimplementedCard {
  constructor (game) {
    super(game, "Dramatic Entrance", "Shadowmoor", "SHM");
  }
}

module.exports = DramaticEntrance;
