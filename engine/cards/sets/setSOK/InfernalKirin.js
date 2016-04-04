"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalKirin extends UnimplementedCard {
  constructor(game) {
    super(game, "Infernal Kirin", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = InfernalKirin;
