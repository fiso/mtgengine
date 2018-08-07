"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralHelm extends UnimplementedCard {
  constructor (game) {
    super(game, "Coral Helm", "Masters Edition IV", "ME4");
  }
}

module.exports = CoralHelm;
