"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthlore extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthlore", "Ice Age", "ICE");
  }
}

module.exports = Earthlore;
