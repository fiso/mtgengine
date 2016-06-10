"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntotheVoid extends UnimplementedCard {
  constructor (game) {
    super(game, "Into the Void", "Avacyn Restored", "AVR");
  }
}

module.exports = IntotheVoid;
