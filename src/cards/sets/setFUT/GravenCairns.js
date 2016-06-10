"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GravenCairns extends UnimplementedCard {
  constructor (game) {
    super(game, "Graven Cairns", "Future Sight", "FUT");
  }
}

module.exports = GravenCairns;
