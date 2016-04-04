"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloisteredYouth extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloistered Youth", "Innistrad", "ISD");
  }
}

module.exports = CloisteredYouth;
