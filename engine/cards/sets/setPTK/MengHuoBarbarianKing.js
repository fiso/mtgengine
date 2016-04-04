"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MengHuoBarbarianKingBase = require("../setME3/MengHuoBarbarianKing.js");

class MengHuoBarbarianKing extends MengHuoBarbarianKingBase {
  constructor(game) {
    super(game, "Meng Huo, Barbarian King", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = MengHuoBarbarianKing;
