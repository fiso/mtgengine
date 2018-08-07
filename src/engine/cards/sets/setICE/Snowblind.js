"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Snowblind extends UnimplementedCard {
  constructor (game) {
    super(game, "Snowblind", "Ice Age", "ICE");
  }
}

module.exports = Snowblind;
