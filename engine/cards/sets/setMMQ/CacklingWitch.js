"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CacklingWitch extends Card {
  constructor(game) {
    super(game, "Cackling Witch", "Mercadian Masques", "MMQ");
  }
}

module.exports = CacklingWitch;
