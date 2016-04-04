"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindSlashBase = require("../set8ED/MindSlash.js");

class MindSlash extends MindSlashBase {
  constructor(game) {
    super(game, "Mind Slash", "Nemesis", "NMS");
  }
}

module.exports = MindSlash;
