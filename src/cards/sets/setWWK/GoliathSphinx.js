"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoliathSphinx extends UnimplementedCard {
  constructor(game) {
    super(game, "Goliath Sphinx", "Worldwake", "WWK");
  }
}

module.exports = GoliathSphinx;
