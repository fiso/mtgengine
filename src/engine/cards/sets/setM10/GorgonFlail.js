"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorgonFlail extends UnimplementedCard {
  constructor (game) {
    super(game, "Gorgon Flail", "Magic 2010", "M10");
  }
}

module.exports = GorgonFlail;
