"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuffocatingBlast extends UnimplementedCard {
  constructor(game) {
    super(game, "Suffocating Blast", "Apocalypse", "APC");
  }
}

module.exports = SuffocatingBlast;
