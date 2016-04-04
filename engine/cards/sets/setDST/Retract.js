"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Retract extends UnimplementedCard {
  constructor(game) {
    super(game, "Retract", "Darksteel", "DST");
  }
}

module.exports = Retract;
