"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidMaw extends UnimplementedCard {
  constructor (game) {
    super(game, "Void Maw", "Coldsnap", "CSP");
  }
}

module.exports = VoidMaw;
