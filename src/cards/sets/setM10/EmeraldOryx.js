"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmeraldOryx extends UnimplementedCard {
  constructor (game) {
    super(game, "Emerald Oryx", "Magic 2010", "M10");
  }
}

module.exports = EmeraldOryx;
