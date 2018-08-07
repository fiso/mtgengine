"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TetsuoUmezawa extends UnimplementedCard {
  constructor (game) {
    super(game, "Tetsuo Umezawa", "Masters Edition III", "ME3");
  }
}

module.exports = TetsuoUmezawa;
