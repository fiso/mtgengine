"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LiuBeiLordofShuBase = require("../setME3/LiuBeiLordofShu.js");

class LiuBeiLordofShu extends LiuBeiLordofShuBase {
  constructor(game) {
    super(game, "Liu Bei, Lord of Shu", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = LiuBeiLordofShu;
