"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EndbringersRevel extends UnimplementedCard {
  constructor(game) {
    super(game, "Endbringer's Revel", "Prophecy", "PCY");
  }
}

module.exports = EndbringersRevel;
