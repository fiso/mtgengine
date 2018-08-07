"use strict";
const Constants = require ("../../../Constants");
const MiasmicMummyBase = require("../setMTGA/MiasmicMummy");

class MiasmicMummy extends MiasmicMummyBase {
  constructor (game) {
    super(game, "Miasmic Mummy", "Amonkhet", "AKH");
  }
}

module.exports = MiasmicMummy;
