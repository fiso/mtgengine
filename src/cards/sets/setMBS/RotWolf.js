"use strict";
const Constants = require ("../../../Constants");
const RotWolfBase = require("../setTD2/RotWolf");

class RotWolf extends RotWolfBase {
  constructor (game) {
    super(game, "Rot Wolf", "Mirrodin Besieged", "MBS");
  }
}

module.exports = RotWolf;
