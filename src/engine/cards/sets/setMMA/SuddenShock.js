"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenShock extends UnimplementedCard {
  constructor (game) {
    super(game, "Sudden Shock", "Modern Masters", "MMA");
  }
}

module.exports = SuddenShock;
