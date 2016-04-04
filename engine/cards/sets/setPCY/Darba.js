"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Darba extends UnimplementedCard {
  constructor(game) {
    super(game, "Darba", "Prophecy", "PCY");
  }
}

module.exports = Darba;
