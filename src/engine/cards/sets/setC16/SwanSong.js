"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwanSong extends UnimplementedCard {
  constructor (game) {
    super(game, "Swan Song", "Commander 2016", "C16");
  }
}

module.exports = SwanSong;
