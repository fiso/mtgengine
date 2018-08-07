"use strict";
const Constants = require ("../../../Constants");
const ShamanenKorBase = require("../setTPR/ShamanenKor");

class ShamanenKor extends ShamanenKorBase {
  constructor (game) {
    super(game, "Shaman en-Kor", "Stronghold", "STH");
  }
}

module.exports = ShamanenKor;
