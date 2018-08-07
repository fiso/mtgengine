"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sporemound extends UnimplementedCard {
  constructor (game) {
    super(game, "Sporemound", "Magic 2014", "M14");
  }
}

module.exports = Sporemound;
