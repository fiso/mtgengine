"use strict";
const Constants = require ("../../../Constants");
const InsidiousBookwormsBase = require("../setALL/InsidiousBookworms");

class InsidiousBookworms extends InsidiousBookwormsBase {
  constructor (game) {
    super(game, "Insidious Bookworms", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = InsidiousBookworms;
