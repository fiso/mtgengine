"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HapatrasMark extends UnimplementedCard {
  constructor (game) {
    super(game, "Hapatra's Mark", "Amonkhet", "AKH");
  }
}

module.exports = HapatrasMark;
