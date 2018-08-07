"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SidisiUndeadVizier extends UnimplementedCard {
  constructor (game) {
    super(game, "Sidisi, Undead Vizier", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SidisiUndeadVizier;
