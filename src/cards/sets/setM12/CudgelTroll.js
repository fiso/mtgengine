"use strict";
const Constants = require ("../../../Constants");
const CudgelTrollBase = require("../setM10/CudgelTroll");

class CudgelTroll extends CudgelTrollBase {
  constructor (game) {
    super(game, "Cudgel Troll", "Magic 2012", "M12");
  }
}

module.exports = CudgelTroll;
