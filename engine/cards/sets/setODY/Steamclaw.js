"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Steamclaw extends UnimplementedCard {
  constructor(game) {
    super(game, "Steamclaw", "Odyssey", "ODY");
  }
}

module.exports = Steamclaw;
