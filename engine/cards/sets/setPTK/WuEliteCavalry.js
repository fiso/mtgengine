"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WuEliteCavalryBase = require("../setME3/WuEliteCavalry.js");

class WuEliteCavalry extends WuEliteCavalryBase {
  constructor(game) {
    super(game, "Wu Elite Cavalry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuEliteCavalry;
