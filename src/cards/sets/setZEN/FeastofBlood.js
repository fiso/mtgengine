"use strict";
const Constants = require ("../../../Constants");
const FeastofBloodBase = require("../setPIDW/FeastofBlood");

class FeastofBlood extends FeastofBloodBase {
  constructor (game) {
    super(game, "Feast of Blood", "Zendikar", "ZEN");
  }
}

module.exports = FeastofBlood;
