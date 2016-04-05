"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gravebind extends UnimplementedCard {
  constructor(game) {
    super(game, "Gravebind", "Ice Age", "ICE");
  }
}

module.exports = Gravebind;
