"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bloodcurdler extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodcurdler", "Odyssey", "ODY");
  }
}

module.exports = Bloodcurdler;
