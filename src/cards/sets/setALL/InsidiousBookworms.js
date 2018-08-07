"use strict";
const Constants = require ("../../../Constants");
const InsidiousBookwormsBase = require("../setCST/InsidiousBookworms");

class InsidiousBookworms extends InsidiousBookwormsBase {
  constructor (game) {
    super(game, "Insidious Bookworms", "Alliances", "ALL");
  }
}

module.exports = InsidiousBookworms;
