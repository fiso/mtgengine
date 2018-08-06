"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeronsGraceChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Heron's Grace Champion", "Eldritch Moon", "EMN");
  }
}

module.exports = HeronsGraceChampion;
