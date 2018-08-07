"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlimpsetheFuture extends UnimplementedCard {
  constructor (game) {
    super(game, "Glimpse the Future", "Magic 2014", "M14");
  }
}

module.exports = GlimpsetheFuture;
