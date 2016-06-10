"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostLeonin extends UnimplementedCard {
  constructor (game) {
    super(game, "Lost Leonin", "New Phyrexia", "NPH");
  }
}

module.exports = LostLeonin;
