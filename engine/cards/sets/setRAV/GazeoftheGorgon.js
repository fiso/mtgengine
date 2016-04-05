"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GazeoftheGorgon extends UnimplementedCard {
  constructor(game) {
    super(game, "Gaze of the Gorgon", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GazeoftheGorgon;
