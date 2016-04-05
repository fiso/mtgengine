"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalevolentWhispers extends UnimplementedCard {
  constructor(game) {
    super(game, "Malevolent Whispers", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MalevolentWhispers;
