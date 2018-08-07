"use strict";
const Constants = require ("../../../Constants");
const MerfolkSkyscoutBase = require("../setCN2/MerfolkSkyscout");

class MerfolkSkyscout extends MerfolkSkyscoutBase {
  constructor (game) {
    super(game, "Merfolk Skyscout", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MerfolkSkyscout;
