"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Secretkeeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Secretkeeper", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = Secretkeeper;
