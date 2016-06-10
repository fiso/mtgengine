"use strict";
const Constants = require ("../../../Constants");
const ColdsteelHeartBase = require("../setCSP/ColdsteelHeart");

class ColdsteelHeart extends ColdsteelHeartBase {
  constructor (game) {
    super(game, "Coldsteel Heart", "Commander 2015", "C15");
  }
}

module.exports = ColdsteelHeart;
