"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Armistice extends UnimplementedCard {
  constructor(game) {
    super(game, "Armistice", "Commander 2014", "C14");
  }
}

module.exports = Armistice;
