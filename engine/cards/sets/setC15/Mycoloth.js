"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mycoloth extends UnimplementedCard {
  constructor(game) {
    super(game, "Mycoloth", "Commander 2015", "C15");
  }
}

module.exports = Mycoloth;
