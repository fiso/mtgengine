"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeatherbackBaloth extends UnimplementedCard {
  constructor(game) {
    super(game, "Leatherback Baloth", "Worldwake", "WWK");
  }
}

module.exports = LeatherbackBaloth;
