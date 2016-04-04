"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedWire extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbed Wire", "Mercadian Masques", "MMQ");
  }
}

module.exports = BarbedWire;
