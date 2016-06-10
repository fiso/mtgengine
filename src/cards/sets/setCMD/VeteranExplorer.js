"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranExplorer extends UnimplementedCard {
  constructor (game) {
    super(game, "Veteran Explorer", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VeteranExplorer;
