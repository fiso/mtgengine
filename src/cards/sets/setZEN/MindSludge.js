"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindSludge extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Sludge", "Zendikar", "ZEN");
  }
}

module.exports = MindSludge;
