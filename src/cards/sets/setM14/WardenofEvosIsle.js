"use strict";
const Constants = require ("../../../Constants");
const WardenofEvosIsleBase = require("../setEMA/WardenofEvosIsle");

class WardenofEvosIsle extends WardenofEvosIsleBase {
  constructor (game) {
    super(game, "Warden of Evos Isle", "Magic 2014", "M14");
  }
}

module.exports = WardenofEvosIsle;
