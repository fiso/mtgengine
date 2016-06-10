"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaelstromDjinn extends UnimplementedCard {
  constructor (game) {
    super(game, "Maelstrom Djinn", "Future Sight", "FUT");
  }
}

module.exports = MaelstromDjinn;
