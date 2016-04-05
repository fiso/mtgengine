"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamiteMinistration extends UnimplementedCard {
  constructor(game) {
    super(game, "Samite Ministration", "Invasion", "INV");
  }
}

module.exports = SamiteMinistration;
