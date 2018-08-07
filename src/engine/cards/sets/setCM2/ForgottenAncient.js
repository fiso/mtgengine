"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForgottenAncient extends UnimplementedCard {
  constructor (game) {
    super(game, "Forgotten Ancient", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ForgottenAncient;
