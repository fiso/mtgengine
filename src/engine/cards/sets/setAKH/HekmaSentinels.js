"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HekmaSentinels extends UnimplementedCard {
  constructor (game) {
    super(game, "Hekma Sentinels", "Amonkhet", "AKH");
  }
}

module.exports = HekmaSentinels;
