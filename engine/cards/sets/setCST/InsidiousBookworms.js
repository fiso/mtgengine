"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InsidiousBookwormsBase = require("../setALL/InsidiousBookworms.js");

class InsidiousBookworms extends InsidiousBookwormsBase {
  constructor(game) {
    super(game, "Insidious Bookworms", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = InsidiousBookworms;
