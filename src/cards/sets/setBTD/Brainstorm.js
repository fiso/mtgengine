"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brainstorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Brainstorm", "Beatdown Box Set", "BTD");
  }
}

module.exports = Brainstorm;
