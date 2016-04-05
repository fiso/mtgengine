"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwanSong extends UnimplementedCard {
  constructor(game) {
    super(game, "Swan Song", "Theros", "THS");
  }
}

module.exports = SwanSong;
