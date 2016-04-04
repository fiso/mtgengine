"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireBowman extends Card {
  constructor(game) {
    super(game, "Fire Bowman", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = FireBowman;
