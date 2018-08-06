"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IncendiaryFlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Incendiary Flow", "Eldritch Moon", "EMN");
  }
}

module.exports = IncendiaryFlow;
