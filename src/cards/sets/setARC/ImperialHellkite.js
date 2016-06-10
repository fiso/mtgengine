"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialHellkite extends UnimplementedCard {
  constructor (game) {
    super(game, "Imperial Hellkite", "Archenemy", "ARC");
  }
}

module.exports = ImperialHellkite;
