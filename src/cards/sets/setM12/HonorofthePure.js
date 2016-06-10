"use strict";
const Constants = require ("../../../Constants");
const HonorofthePureBase = require("../setM10/HonorofthePure");

class HonorofthePure extends HonorofthePureBase {
  constructor (game) {
    super(game, "Honor of the Pure", "Magic 2012", "M12");
  }
}

module.exports = HonorofthePure;
