"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianGremlins extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Gremlins", "Antiquities", "ATQ");
  }
}

module.exports = PhyrexianGremlins;
