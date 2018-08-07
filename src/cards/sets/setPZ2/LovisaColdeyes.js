"use strict";
const Constants = require ("../../../Constants");
const LovisaColdeyesBase = require("../setDDS/LovisaColdeyes");

class LovisaColdeyes extends LovisaColdeyesBase {
  constructor (game) {
    super(game, "Lovisa Coldeyes", "You Make the Cube", "PZ2");
  }
}

module.exports = LovisaColdeyes;
