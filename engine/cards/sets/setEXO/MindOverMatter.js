"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindOverMatter extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Over Matter", "Exodus", "EXO");
  }
}

module.exports = MindOverMatter;
