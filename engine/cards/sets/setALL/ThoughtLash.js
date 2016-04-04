"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoughtLash extends UnimplementedCard {
  constructor(game) {
    super(game, "Thought Lash", "Alliances", "ALL");
  }
}

module.exports = ThoughtLash;
