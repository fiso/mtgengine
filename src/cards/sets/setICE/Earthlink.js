"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthlink extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthlink", "Ice Age", "ICE");
  }
}

module.exports = Earthlink;
