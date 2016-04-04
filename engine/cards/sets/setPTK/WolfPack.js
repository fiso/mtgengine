"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WolfPackBase = require("../setME2/WolfPack.js");

class WolfPack extends WolfPackBase {
  constructor(game) {
    super(game, "Wolf Pack", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WolfPack;
