"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalleroftheHunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Caller of the Hunt", "Mercadian Masques", "MMQ");
  }
}

module.exports = CalleroftheHunt;
