"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerritorialBaloth extends UnimplementedCard {
  constructor (game) {
    super(game, "Territorial Baloth", "Battle for Zendikar", "BFZ");
  }
}

module.exports = TerritorialBaloth;
