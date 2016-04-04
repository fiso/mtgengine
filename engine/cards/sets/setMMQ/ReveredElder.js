"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReveredElder extends UnimplementedCard {
  constructor(game) {
    super(game, "Revered Elder", "Mercadian Masques", "MMQ");
  }
}

module.exports = ReveredElder;
