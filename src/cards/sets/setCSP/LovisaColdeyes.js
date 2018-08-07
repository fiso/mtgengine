"use strict";
const Constants = require ("../../../Constants");
const LovisaColdeyesBase = require("../setDDS/LovisaColdeyes");

class LovisaColdeyes extends LovisaColdeyesBase {
  constructor (game) {
    super(game, "Lovisa Coldeyes", "Coldsnap", "CSP");
  }
}

module.exports = LovisaColdeyes;
