"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrunatheFadingLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Bruna, the Fading Light", "Eldritch Moon", "EMN");
  }
}

module.exports = BrunatheFadingLight;
