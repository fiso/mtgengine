"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShuCavalryBase = require("../setME3/ShuCavalry.js");

class ShuCavalry extends ShuCavalryBase {
  constructor(game) {
    super(game, "Shu Cavalry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuCavalry;
