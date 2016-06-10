"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ambush extends UnimplementedCard {
  constructor (game) {
    super(game, "Ambush", "Homelands", "HML");
  }
}

module.exports = Ambush;
