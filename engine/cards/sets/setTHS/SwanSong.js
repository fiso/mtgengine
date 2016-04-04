"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwanSong extends Card {
  constructor(game) {
    super(game, "Swan Song", "Theros", "THS");
  }
}

module.exports = SwanSong;
