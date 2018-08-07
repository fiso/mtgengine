"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JustFate extends UnimplementedCard {
  constructor (game) {
    super(game, "Just Fate", "Masters Edition IV", "ME4");
  }
}

module.exports = JustFate;
