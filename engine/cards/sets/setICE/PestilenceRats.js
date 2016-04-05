"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PestilenceRats extends UnimplementedCard {
  constructor(game) {
    super(game, "Pestilence Rats", "Ice Age", "ICE");
  }
}

module.exports = PestilenceRats;
