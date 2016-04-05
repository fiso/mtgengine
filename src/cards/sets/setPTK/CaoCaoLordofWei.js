"use strict";
const Constants = require ("../../../Constants");
const CaoCaoLordofWeiBase = require("../setV11/CaoCaoLordofWei");

class CaoCaoLordofWei extends CaoCaoLordofWeiBase {
  constructor(game) {
    super(game, "Cao Cao, Lord of Wei", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = CaoCaoLordofWei;
