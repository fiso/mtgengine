"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofDeceit extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of Deceit", "Journey into Nyx", "JOU");
  }
}

module.exports = DiscipleofDeceit;
