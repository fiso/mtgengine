"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Verdigris extends UnimplementedCard {
  constructor(game) {
    super(game, "Verdigris", "Tempest", "TMP");
  }
}

module.exports = Verdigris;
