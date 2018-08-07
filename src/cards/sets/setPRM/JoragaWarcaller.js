"use strict";
const Constants = require ("../../../Constants");
const JoragaWarcallerBase = require("../setCMA/JoragaWarcaller");

class JoragaWarcaller extends JoragaWarcallerBase {
  constructor (game) {
    super(game, "Joraga Warcaller", "Magic Online Promos", "PRM");
  }
}

module.exports = JoragaWarcaller;
