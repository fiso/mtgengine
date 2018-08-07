"use strict";
const Constants = require ("../../../Constants");
const StonehoofChieftainBase = require("../setPZ2/StonehoofChieftain");

class StonehoofChieftain extends StonehoofChieftainBase {
  constructor (game) {
    super(game, "Stonehoof Chieftain", "Commander 2016", "C16");
  }
}

module.exports = StonehoofChieftain;
