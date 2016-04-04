"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindKnives extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Knives", "Portal", "POR");
  }
}

module.exports = MindKnives;
