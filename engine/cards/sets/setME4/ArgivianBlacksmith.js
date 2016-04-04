"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgivianBlacksmithBase = require("../setATQ/ArgivianBlacksmith.js");

class ArgivianBlacksmith extends ArgivianBlacksmithBase {
  constructor(game) {
    super(game, "Argivian Blacksmith", "Masters Edition IV", "ME4");
  }
}

module.exports = ArgivianBlacksmith;
