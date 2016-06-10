"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerritorialDispute extends UnimplementedCard {
  constructor (game) {
    super(game, "Territorial Dispute", "Mercadian Masques", "MMQ");
  }
}

module.exports = TerritorialDispute;
