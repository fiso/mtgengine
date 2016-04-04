"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaoCaoLordofWeiBase = require("../setV11/CaoCaoLordofWei.js");

class CaoCaoLordofWei extends CaoCaoLordofWeiBase {
  constructor(game) {
    super(game, "Cao Cao, Lord of Wei", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CaoCaoLordofWei;
