"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChancelloroftheTangle extends UnimplementedCard {
  constructor (game) {
    super(game, "Chancellor of the Tangle", "New Phyrexia", "NPH");
  }
}

module.exports = ChancelloroftheTangle;
