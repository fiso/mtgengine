"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Silence extends UnimplementedCard {
  constructor (game) {
    super(game, "Silence", "Magic 2014", "M14");
  }
}

module.exports = Silence;
