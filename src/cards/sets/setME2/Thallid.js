"use strict";
const Constants = require ("../../../Constants");
const ThallidBase = require("../setMMA/Thallid");

class Thallid extends ThallidBase {
  constructor (game) {
    super(game, "Thallid", "Masters Edition II", "ME2");
  }
}

module.exports = Thallid;
