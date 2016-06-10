"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExpendableTroops extends UnimplementedCard {
  constructor (game) {
    super(game, "Expendable Troops", "Urza's Legacy", "ULG");
  }
}

module.exports = ExpendableTroops;
