"use strict";
const Constants = require ("../../../Constants");
const CustodiLichBase = require("../setPZ2/CustodiLich");

class CustodiLich extends CustodiLichBase {
  constructor (game) {
    super(game, "Custodi Lich", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = CustodiLich;
