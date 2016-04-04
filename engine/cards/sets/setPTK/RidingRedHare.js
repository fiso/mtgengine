"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RidingRedHare extends Card {
  constructor(game) {
    super(game, "Riding Red Hare", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = RidingRedHare;
