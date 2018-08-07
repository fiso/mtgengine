"use strict";
const Constants = require ("../../../Constants");
const SwanSongBase = require("../setC16/SwanSong");

class SwanSong extends SwanSongBase {
  constructor (game) {
    super(game, "Swan Song", "Theros", "THS");
  }
}

module.exports = SwanSong;
