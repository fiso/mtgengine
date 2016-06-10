"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thumbscrews extends UnimplementedCard {
  constructor (game) {
    super(game, "Thumbscrews", "Tempest", "TMP");
  }
}

module.exports = Thumbscrews;
