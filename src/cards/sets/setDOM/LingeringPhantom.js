"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LingeringPhantom extends UnimplementedCard {
  constructor (game) {
    super(game, "Lingering Phantom", "Dominaria", "DOM");
  }
}

module.exports = LingeringPhantom;
