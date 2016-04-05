"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kezzerdrix extends UnimplementedCard {
  constructor(game) {
    super(game, "Kezzerdrix", "Tempest", "TMP");
  }
}

module.exports = Kezzerdrix;
