"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshalingCry extends UnimplementedCard {
  constructor (game) {
    super(game, "Marshaling Cry", "Future Sight", "FUT");
  }
}

module.exports = MarshalingCry;
