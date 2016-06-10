"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ruination extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruination", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Ruination;
