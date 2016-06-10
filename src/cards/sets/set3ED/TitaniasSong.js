"use strict";
const Constants = require ("../../../Constants");
const TitaniasSongBase = require("../setATQ/TitaniasSong");

class TitaniasSong extends TitaniasSongBase {
  constructor (game) {
    super(game, "Titania's Song", "Revised Edition", "3ED");
  }
}

module.exports = TitaniasSong;
