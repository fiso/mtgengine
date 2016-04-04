"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PallidMycodermBase = require("../setMMA/PallidMycoderm.js");

class PallidMycoderm extends PallidMycodermBase {
  constructor(game) {
    super(game, "Pallid Mycoderm", "Planar Chaos", "PLC");
  }
}

module.exports = PallidMycoderm;
