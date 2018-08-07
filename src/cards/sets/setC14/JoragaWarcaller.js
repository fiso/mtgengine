"use strict";
const Constants = require ("../../../Constants");
const JoragaWarcallerBase = require("../setCMA/JoragaWarcaller");

class JoragaWarcaller extends JoragaWarcallerBase {
  constructor (game) {
    super(game, "Joraga Warcaller", "Commander 2014", "C14");
  }
}

module.exports = JoragaWarcaller;
