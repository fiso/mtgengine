"use strict";
const Constants = require ("../../../Constants");
const HonorofthePureBase = require("../setMD1/HonorofthePure");

class HonorofthePure extends HonorofthePureBase {
  constructor (game) {
    super(game, "Honor of the Pure", "Magic 2010 Promos", "PM10");
  }
}

module.exports = HonorofthePure;
