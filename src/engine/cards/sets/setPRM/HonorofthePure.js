"use strict";
const Constants = require ("../../../Constants");
const HonorofthePureBase = require("../setMD1/HonorofthePure");

class HonorofthePure extends HonorofthePureBase {
  constructor (game) {
    super(game, "Honor of the Pure", "Magic Online Promos", "PRM");
  }
}

module.exports = HonorofthePure;
