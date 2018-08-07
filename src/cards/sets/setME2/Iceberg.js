"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Iceberg extends UnimplementedCard {
  constructor (game) {
    super(game, "Iceberg", "Masters Edition II", "ME2");
  }
}

module.exports = Iceberg;
