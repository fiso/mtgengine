"use strict";
const Constants = require ("../../../Constants");
const KeeningStoneBase = require("../setC16/KeeningStone");

class KeeningStone extends KeeningStoneBase {
  constructor (game) {
    super(game, "Keening Stone", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KeeningStone;
