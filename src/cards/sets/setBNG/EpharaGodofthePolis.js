"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpharaGodofthePolis extends UnimplementedCard {
  constructor (game) {
    super(game, "Ephara, God of the Polis", "Born of the Gods", "BNG");
  }
}

module.exports = EpharaGodofthePolis;
