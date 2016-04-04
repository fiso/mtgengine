"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TitaniasSongBase = require("../setATQ/TitaniasSong.js");

class TitaniasSong extends TitaniasSongBase {
  constructor(game) {
    super(game, "Titania's Song", "Revised Edition", "3ED");
  }
}

module.exports = TitaniasSong;
