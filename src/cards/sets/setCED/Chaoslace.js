"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chaoslace extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaoslace", "Collector's Edition", "CED");
  }
}

module.exports = Chaoslace;
