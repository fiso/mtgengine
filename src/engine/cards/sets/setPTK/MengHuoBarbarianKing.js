"use strict";
const Constants = require ("../../../Constants");
const MengHuoBarbarianKingBase = require("../setME3/MengHuoBarbarianKing");

class MengHuoBarbarianKing extends MengHuoBarbarianKingBase {
  constructor (game) {
    super(game, "Meng Huo, Barbarian King", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MengHuoBarbarianKing;
