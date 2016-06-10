"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClashofRealities extends UnimplementedCard {
  constructor (game) {
    super(game, "Clash of Realities", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ClashofRealities;
