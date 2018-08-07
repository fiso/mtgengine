"use strict";
const Constants = require ("../../../Constants");
const CudgelTrollBase = require("../setM12/CudgelTroll");

class CudgelTroll extends CudgelTrollBase {
  constructor (game) {
    super(game, "Cudgel Troll", "Magic 2010", "M10");
  }
}

module.exports = CudgelTroll;
