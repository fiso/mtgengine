"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WuLongbowmanBase = require("../setME3/WuLongbowman.js");

class WuLongbowman extends WuLongbowmanBase {
  constructor(game) {
    super(game, "Wu Longbowman", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuLongbowman;
