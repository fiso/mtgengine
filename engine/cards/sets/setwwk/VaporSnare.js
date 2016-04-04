"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VaporSnare extends UnimplementedCard {
  constructor(game) {
    super(game, "Vapor Snare", "Worldwake", "WWK");
  }
}

module.exports = VaporSnare;
