"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Disciple of Grace", "Onslaught", "ONS");
  }
}

module.exports = DiscipleofGrace;
