"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtLash extends UnimplementedCard {
  constructor (game) {
    super(game, "Thought Lash", "Masters Edition II", "ME2");
  }
}

module.exports = ThoughtLash;
