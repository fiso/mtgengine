"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninBattlemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Leonin Battlemage", "Darksteel", "DST");
  }
}

module.exports = LeoninBattlemage;
