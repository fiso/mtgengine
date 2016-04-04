"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostintheMist extends UnimplementedCard {
  constructor(game) {
    super(game, "Lost in the Mist", "Innistrad", "ISD");
  }
}

module.exports = LostintheMist;
