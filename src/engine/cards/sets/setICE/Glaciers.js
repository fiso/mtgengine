"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Glaciers extends UnimplementedCard {
  constructor (game) {
    super(game, "Glaciers", "Ice Age", "ICE");
  }
}

module.exports = Glaciers;
