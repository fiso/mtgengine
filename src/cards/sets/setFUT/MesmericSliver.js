"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesmericSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesmeric Sliver", "Future Sight", "FUT");
  }
}

module.exports = MesmericSliver;
