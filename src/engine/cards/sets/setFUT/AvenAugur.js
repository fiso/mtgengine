"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenAugur extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Augur", "Future Sight", "FUT");
  }
}

module.exports = AvenAugur;
