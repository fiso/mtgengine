"use strict";
const Constants = require ("../../../Constants");
const ThornThallidBase = require("../setMED/ThornThallid");

class ThornThallid extends ThornThallidBase {
  constructor (game) {
    super(game, "Thorn Thallid", "Fallen Empires", "FEM");
  }
}

module.exports = ThornThallid;
