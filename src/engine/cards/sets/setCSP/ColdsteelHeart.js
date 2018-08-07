"use strict";
const Constants = require ("../../../Constants");
const ColdsteelHeartBase = require("../setCM2/ColdsteelHeart");

class ColdsteelHeart extends ColdsteelHeartBase {
  constructor (game) {
    super(game, "Coldsteel Heart", "Coldsnap", "CSP");
  }
}

module.exports = ColdsteelHeart;
