"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kitesail extends UnimplementedCard {
  constructor (game) {
    super(game, "Kitesail", "Magic 2013", "M13");
  }
}

module.exports = Kitesail;
