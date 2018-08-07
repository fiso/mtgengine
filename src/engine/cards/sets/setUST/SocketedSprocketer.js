"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SocketedSprocketer extends UnimplementedCard {
  constructor (game) {
    super(game, "Socketed Sprocketer", "Unstable", "UST");
  }
}

module.exports = SocketedSprocketer;
