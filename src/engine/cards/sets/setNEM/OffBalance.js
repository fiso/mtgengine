"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OffBalance extends UnimplementedCard {
  constructor (game) {
    super(game, "Off Balance", "Nemesis", "NEM");
  }
}

module.exports = OffBalance;
