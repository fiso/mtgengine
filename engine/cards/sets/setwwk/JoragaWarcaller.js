"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JoragaWarcallerBase = require("../setC14/JoragaWarcaller.js");

class JoragaWarcaller extends JoragaWarcallerBase {
  constructor(game) {
    super(game, "Joraga Warcaller", "Worldwake", "WWK");
  }
}

module.exports = JoragaWarcaller;
