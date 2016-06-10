"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Tor Giant", "Ice Age", "ICE");
  }
}

module.exports = TorGiant;
