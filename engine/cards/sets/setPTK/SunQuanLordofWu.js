"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunQuanLordofWuBase = require("../setV11/SunQuanLordofWu.js");

class SunQuanLordofWu extends SunQuanLordofWuBase {
  constructor(game) {
    super(game, "Sun Quan, Lord of Wu", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = SunQuanLordofWu;
