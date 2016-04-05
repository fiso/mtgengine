"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindRaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Raker", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MindRaker;
