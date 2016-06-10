"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindPhantasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Blind Phantasm", "Future Sight", "FUT");
  }
}

module.exports = BlindPhantasm;
