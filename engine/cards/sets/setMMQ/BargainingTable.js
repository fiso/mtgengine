"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BargainingTable extends Card {
  constructor(game) {
    super(game, "Bargaining Table", "Mercadian Masques", "MMQ");
  }
}

module.exports = BargainingTable;
