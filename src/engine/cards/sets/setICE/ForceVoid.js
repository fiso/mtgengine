"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForceVoid extends UnimplementedCard {
  constructor (game) {
    super(game, "Force Void", "Ice Age", "ICE");
  }
}

module.exports = ForceVoid;
