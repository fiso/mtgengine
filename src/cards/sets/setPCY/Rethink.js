"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rethink extends UnimplementedCard {
  constructor(game) {
    super(game, "Rethink", "Prophecy", "PCY");
  }
}

module.exports = Rethink;
