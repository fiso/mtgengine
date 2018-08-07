"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YourInescapableDoom extends UnimplementedCard {
  constructor (game) {
    super(game, "Your Inescapable Doom", "Promotional Schemes", "PARC");
  }
}

module.exports = YourInescapableDoom;
