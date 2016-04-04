"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoliathSphinx extends Card {
  constructor(game) {
    super(game, "Goliath Sphinx", "Worldwake", "WWK");
  }
}

module.exports = GoliathSphinx;
