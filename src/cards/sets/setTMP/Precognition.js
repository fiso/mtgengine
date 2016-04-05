"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Precognition extends UnimplementedCard {
  constructor(game) {
    super(game, "Precognition", "Tempest", "TMP");
  }
}

module.exports = Precognition;
