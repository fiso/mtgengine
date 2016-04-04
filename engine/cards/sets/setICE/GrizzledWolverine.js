"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrizzledWolverine extends Card {
  constructor(game) {
    super(game, "Grizzled Wolverine", "Ice Age", "ICE");
  }
}

module.exports = GrizzledWolverine;
