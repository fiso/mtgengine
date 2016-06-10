"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrimazKingofOreskos extends UnimplementedCard {
  constructor (game) {
    super(game, "Brimaz, King of Oreskos", "Born of the Gods", "BNG");
  }
}

module.exports = BrimazKingofOreskos;
