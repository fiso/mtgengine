"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenWindreader extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Windreader", "Tenth Edition", "10E");
  }
}

module.exports = AvenWindreader;
