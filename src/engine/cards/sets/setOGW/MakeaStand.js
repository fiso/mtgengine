"use strict";
const Constants = require ("../../../Constants");
const MakeaStandBase = require("../setM19/MakeaStand");

class MakeaStand extends MakeaStandBase {
  constructor (game) {
    super(game, "Make a Stand", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MakeaStand;
