"use strict";
const Constants = require ("../../../Constants");
const MagusoftheMoonBase = require("../setIMA/MagusoftheMoon");

class MagusoftheMoon extends MagusoftheMoonBase {
  constructor (game) {
    super(game, "Magus of the Moon", "Future Sight", "FUT");
  }
}

module.exports = MagusoftheMoon;
