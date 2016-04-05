"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Æther Storm", "Fifth Edition", "5ED");
  }
}

module.exports = AetherStorm;
