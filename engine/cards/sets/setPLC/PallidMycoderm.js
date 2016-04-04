"use strict";
const Constants = require ("../../../Constants");
const PallidMycodermBase = require("../setMMA/PallidMycoderm");

class PallidMycoderm extends PallidMycodermBase {
  constructor(game) {
    super(game, "Pallid Mycoderm", "Planar Chaos", "PLC");
  }
}

module.exports = PallidMycoderm;
