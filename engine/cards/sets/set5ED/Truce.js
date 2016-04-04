"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Truce extends UnimplementedCard {
  constructor(game) {
    super(game, "Truce", "Fifth Edition", "5ED");
  }
}

module.exports = Truce;
