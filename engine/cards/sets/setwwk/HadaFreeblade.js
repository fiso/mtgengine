"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HadaFreeblade extends UnimplementedCard {
  constructor(game) {
    super(game, "Hada Freeblade", "Worldwake", "WWK");
  }
}

module.exports = HadaFreeblade;
