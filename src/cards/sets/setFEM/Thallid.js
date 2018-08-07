"use strict";
const Constants = require ("../../../Constants");
const ThallidBase = require("../setMMA/Thallid");

class Thallid extends ThallidBase {
  constructor (game) {
    super(game, "Thallid", "Fallen Empires", "FEM");
  }
}

module.exports = Thallid;
