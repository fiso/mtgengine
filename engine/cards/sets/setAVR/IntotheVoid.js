"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntotheVoid extends Card {
  constructor(game) {
    super(game, "Into the Void", "Avacyn Restored", "AVR");
  }
}

module.exports = IntotheVoid;
