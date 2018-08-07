"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonedKhopesh extends UnimplementedCard {
  constructor (game) {
    super(game, "Honed Khopesh", "Amonkhet", "AKH");
  }
}

module.exports = HonedKhopesh;
