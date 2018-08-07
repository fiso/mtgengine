"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Kingfisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Kingfisher", "Urza's Destiny", "UDS");
  }
}

module.exports = Kingfisher;
