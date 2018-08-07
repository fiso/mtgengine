"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScourtheLaboratory extends UnimplementedCard {
  constructor (game) {
    super(game, "Scour the Laboratory", "Eldritch Moon", "EMN");
  }
}

module.exports = ScourtheLaboratory;
