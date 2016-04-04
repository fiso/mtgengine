"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DragonFodderBase = require("../setARC/DragonFodder.js");

class DragonFodder extends DragonFodderBase {
  constructor(game) {
    super(game, "Dragon Fodder", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = DragonFodder;
