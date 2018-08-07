"use strict";
const Constants = require ("../../../Constants");
const WuEliteCavalryBase = require("../setME3/WuEliteCavalry");

class WuEliteCavalry extends WuEliteCavalryBase {
  constructor (game) {
    super(game, "Wu Elite Cavalry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuEliteCavalry;
