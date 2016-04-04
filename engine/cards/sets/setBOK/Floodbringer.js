"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Floodbringer extends UnimplementedCard {
  constructor(game) {
    super(game, "Floodbringer", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Floodbringer;
