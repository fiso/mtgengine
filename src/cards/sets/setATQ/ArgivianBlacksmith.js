"use strict";
const Constants = require ("../../../Constants");
const ArgivianBlacksmithBase = require("../setME4/ArgivianBlacksmith");

class ArgivianBlacksmith extends ArgivianBlacksmithBase {
  constructor (game) {
    super(game, "Argivian Blacksmith", "Antiquities", "ATQ");
  }
}

module.exports = ArgivianBlacksmith;
