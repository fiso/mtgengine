"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LuMengWuGeneralBase = require("../setME3/LuMengWuGeneral.js");

class LuMengWuGeneral extends LuMengWuGeneralBase {
  constructor(game) {
    super(game, "Lu Meng, Wu General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LuMengWuGeneral;
