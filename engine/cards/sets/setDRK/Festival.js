"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Festival extends UnimplementedCard {
  constructor(game) {
    super(game, "Festival", "The Dark", "DRK");
  }
}

module.exports = Festival;
