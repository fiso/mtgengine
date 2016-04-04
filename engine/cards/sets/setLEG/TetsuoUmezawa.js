"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TetsuoUmezawa extends UnimplementedCard {
  constructor(game) {
    super(game, "Tetsuo Umezawa", "Legends", "LEG");
  }
}

module.exports = TetsuoUmezawa;
