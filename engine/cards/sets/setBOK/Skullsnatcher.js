"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skullsnatcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Skullsnatcher", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Skullsnatcher;
