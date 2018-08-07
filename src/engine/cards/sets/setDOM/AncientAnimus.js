"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AncientAnimus extends UnimplementedCard {
  constructor (game) {
    super(game, "Ancient Animus", "Dominaria", "DOM");
  }
}

module.exports = AncientAnimus;
