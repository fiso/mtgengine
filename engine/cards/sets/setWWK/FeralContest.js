"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralContest extends UnimplementedCard {
  constructor(game) {
    super(game, "Feral Contest", "Worldwake", "WWK");
  }
}

module.exports = FeralContest;
