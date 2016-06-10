"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BacktoNature extends UnimplementedCard {
  constructor (game) {
    super(game, "Back to Nature", "Magic 2011", "M11");
  }
}

module.exports = BacktoNature;
