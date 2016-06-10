"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindRavel extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Ravel", "Fifth Edition", "5ED");
  }
}

module.exports = MindRavel;
