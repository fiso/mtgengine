"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderofCrows extends UnimplementedCard {
  constructor (game) {
    super(game, "Murder of Crows", "Innistrad", "ISD");
  }
}

module.exports = MurderofCrows;
