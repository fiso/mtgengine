"use strict";
const Constants = require ("../../../Constants");
const MindSlashBase = require("../set8ED/MindSlash");

class MindSlash extends MindSlashBase {
  constructor (game) {
    super(game, "Mind Slash", "Nemesis", "NMS");
  }
}

module.exports = MindSlash;
