"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindSlash extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Slash", "Eighth Edition", "8ED");
  }
}

module.exports = MindSlash;
