"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cagemail extends UnimplementedCard {
  constructor(game) {
    super(game, "Cagemail", "Judgment", "JUD");
  }
}

module.exports = Cagemail;
