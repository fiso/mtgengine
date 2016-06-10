"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smallpox extends UnimplementedCard {
  constructor (game) {
    super(game, "Smallpox", "Magic 2012", "M12");
  }
}

module.exports = Smallpox;
