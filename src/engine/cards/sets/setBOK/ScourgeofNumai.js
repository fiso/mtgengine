"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScourgeofNumai extends UnimplementedCard {
  constructor (game) {
    super(game, "Scourge of Numai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ScourgeofNumai;
