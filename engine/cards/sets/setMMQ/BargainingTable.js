"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BargainingTable extends UnimplementedCard {
  constructor(game) {
    super(game, "Bargaining Table", "Mercadian Masques", "MMQ");
  }
}

module.exports = BargainingTable;
