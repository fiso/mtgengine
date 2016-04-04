"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Silverstrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Silverstrike", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Silverstrike;
