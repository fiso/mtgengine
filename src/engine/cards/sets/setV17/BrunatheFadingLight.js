"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrunatheFadingLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Bruna, the Fading Light", "From the Vault: Transform", "V17");
  }
}

module.exports = BrunatheFadingLight;
