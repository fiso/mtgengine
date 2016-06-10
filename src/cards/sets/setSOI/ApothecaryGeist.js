"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApothecaryGeist extends UnimplementedCard {
  constructor (game) {
    super(game, "Apothecary Geist", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ApothecaryGeist;
