"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Meditate extends UnimplementedCard {
  constructor(game) {
    super(game, "Meditate", "Tempest", "TMP");
  }
}

module.exports = Meditate;
