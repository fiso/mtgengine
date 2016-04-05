"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stand extends UnimplementedCard {
  constructor(game) {
    super(game, "Stand", "Invasion", "INV");
  }
}

module.exports = Stand;
