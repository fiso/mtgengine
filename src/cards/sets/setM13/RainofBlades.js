"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RainofBlades extends UnimplementedCard {
  constructor (game) {
    super(game, "Rain of Blades", "Magic 2013", "M13");
  }
}

module.exports = RainofBlades;
