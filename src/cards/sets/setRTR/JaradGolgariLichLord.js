"use strict";
const Constants = require ("../../../Constants");
const JaradGolgariLichLordBase = require("../setCMA/JaradGolgariLichLord");

class JaradGolgariLichLord extends JaradGolgariLichLordBase {
  constructor (game) {
    super(game, "Jarad, Golgari Lich Lord", "Return to Ravnica", "RTR");
  }
}

module.exports = JaradGolgariLichLord;
