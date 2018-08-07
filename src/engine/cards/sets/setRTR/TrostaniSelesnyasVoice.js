"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrostaniSelesnyasVoice extends UnimplementedCard {
  constructor (game) {
    super(game, "Trostani, Selesnya's Voice", "Return to Ravnica", "RTR");
  }
}

module.exports = TrostaniSelesnyasVoice;
