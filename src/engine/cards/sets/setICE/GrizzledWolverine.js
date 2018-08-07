"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrizzledWolverine extends UnimplementedCard {
  constructor (game) {
    super(game, "Grizzled Wolverine", "Ice Age", "ICE");
  }
}

module.exports = GrizzledWolverine;
