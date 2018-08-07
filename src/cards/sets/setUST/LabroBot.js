"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LabroBot extends UnimplementedCard {
  constructor (game) {
    super(game, "Labro Bot", "Unstable", "UST");
  }
}

module.exports = LabroBot;
