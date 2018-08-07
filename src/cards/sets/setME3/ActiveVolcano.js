"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ActiveVolcano extends UnimplementedCard {
  constructor (game) {
    super(game, "Active Volcano", "Masters Edition III", "ME3");
  }
}

module.exports = ActiveVolcano;
