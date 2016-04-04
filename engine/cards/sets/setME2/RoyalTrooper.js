"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoyalTrooper extends Card {
  constructor(game) {
    super(game, "Royal Trooper", "Masters Edition II", "ME2");
  }
}

module.exports = RoyalTrooper;
