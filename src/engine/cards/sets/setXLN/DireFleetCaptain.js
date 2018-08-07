"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DireFleetCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Dire Fleet Captain", "Ixalan", "XLN");
  }
}

module.exports = DireFleetCaptain;
