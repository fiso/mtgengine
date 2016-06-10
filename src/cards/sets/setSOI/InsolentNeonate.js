"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InsolentNeonate extends UnimplementedCard {
  constructor (game) {
    super(game, "Insolent Neonate", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InsolentNeonate;
