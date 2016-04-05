"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gravegouger extends UnimplementedCard {
  constructor(game) {
    super(game, "Gravegouger", "Torment", "TOR");
  }
}

module.exports = Gravegouger;
