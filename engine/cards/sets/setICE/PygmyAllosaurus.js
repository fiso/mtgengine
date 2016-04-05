"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PygmyAllosaurus extends UnimplementedCard {
  constructor(game) {
    super(game, "Pygmy Allosaurus", "Ice Age", "ICE");
  }
}

module.exports = PygmyAllosaurus;
