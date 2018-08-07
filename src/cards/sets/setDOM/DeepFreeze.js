"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepFreeze extends UnimplementedCard {
  constructor (game) {
    super(game, "Deep Freeze", "Dominaria", "DOM");
  }
}

module.exports = DeepFreeze;
