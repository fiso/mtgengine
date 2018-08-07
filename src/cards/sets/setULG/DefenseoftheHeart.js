"use strict";
const Constants = require ("../../../Constants");
const DefenseoftheHeartBase = require("../setJ16/DefenseoftheHeart");

class DefenseoftheHeart extends DefenseoftheHeartBase {
  constructor (game) {
    super(game, "Defense of the Heart", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenseoftheHeart;
