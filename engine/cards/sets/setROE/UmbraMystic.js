"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UmbraMystic extends UnimplementedCard {
  constructor(game) {
    super(game, "Umbra Mystic", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = UmbraMystic;
