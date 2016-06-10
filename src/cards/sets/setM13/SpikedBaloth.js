"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpikedBaloth extends UnimplementedCard {
  constructor (game) {
    super(game, "Spiked Baloth", "Magic 2013", "M13");
  }
}

module.exports = SpikedBaloth;
