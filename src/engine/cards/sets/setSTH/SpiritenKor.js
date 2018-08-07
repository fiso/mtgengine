"use strict";
const Constants = require ("../../../Constants");
const SpiritenKorBase = require("../setTPR/SpiritenKor");

class SpiritenKor extends SpiritenKorBase {
  constructor (game) {
    super(game, "Spirit en-Kor", "Stronghold", "STH");
  }
}

module.exports = SpiritenKor;
