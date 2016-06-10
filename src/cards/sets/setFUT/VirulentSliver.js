"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirulentSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Virulent Sliver", "Future Sight", "FUT");
  }
}

module.exports = VirulentSliver;
