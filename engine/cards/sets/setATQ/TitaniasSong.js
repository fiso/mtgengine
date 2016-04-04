"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TitaniasSong extends Card {
  constructor(game) {
    super(game, "Titania's Song", "Antiquities", "ATQ");
  }
}

module.exports = TitaniasSong;
