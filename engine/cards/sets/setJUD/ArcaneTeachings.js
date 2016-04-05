"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcaneTeachings extends UnimplementedCard {
  constructor(game) {
    super(game, "Arcane Teachings", "Judgment", "JUD");
  }
}

module.exports = ArcaneTeachings;
