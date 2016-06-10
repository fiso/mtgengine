"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilencetheBelievers extends UnimplementedCard {
  constructor (game) {
    super(game, "Silence the Believers", "Journey into Nyx", "JOU");
  }
}

module.exports = SilencetheBelievers;
