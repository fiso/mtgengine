"use strict";
const Constants = require ("../../../Constants");
const IncinerateBase = require("../setJVC/Incinerate");

class Incinerate extends IncinerateBase {
  constructor (game) {
    super(game, "Incinerate", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Incinerate;
