"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Saltskitter extends UnimplementedCard {
  constructor (game) {
    super(game, "Saltskitter", "Future Sight", "FUT");
  }
}

module.exports = Saltskitter;
