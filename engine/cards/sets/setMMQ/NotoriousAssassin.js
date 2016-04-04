"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NotoriousAssassin extends Card {
  constructor(game) {
    super(game, "Notorious Assassin", "Mercadian Masques", "MMQ");
  }
}

module.exports = NotoriousAssassin;
