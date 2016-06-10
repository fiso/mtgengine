"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Plumeveil extends UnimplementedCard {
  constructor (game) {
    super(game, "Plumeveil", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Plumeveil;
