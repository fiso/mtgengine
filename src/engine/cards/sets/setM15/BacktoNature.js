"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BacktoNature extends UnimplementedCard {
  constructor (game) {
    super(game, "Back to Nature", "Magic 2015", "M15");
  }
}

module.exports = BacktoNature;
