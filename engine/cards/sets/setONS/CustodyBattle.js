"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CustodyBattle extends UnimplementedCard {
  constructor(game) {
    super(game, "Custody Battle", "Onslaught", "ONS");
  }
}

module.exports = CustodyBattle;
