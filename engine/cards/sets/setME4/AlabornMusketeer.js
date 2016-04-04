"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabornMusketeer extends UnimplementedCard {
  constructor(game) {
    super(game, "Alaborn Musketeer", "Masters Edition IV", "ME4");
  }
}

module.exports = AlabornMusketeer;
