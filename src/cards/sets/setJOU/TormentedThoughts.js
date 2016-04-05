"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormentedThoughts extends UnimplementedCard {
  constructor(game) {
    super(game, "Tormented Thoughts", "Journey into Nyx", "JOU");
  }
}

module.exports = TormentedThoughts;
