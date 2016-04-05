"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Updraft extends UnimplementedCard {
  constructor(game) {
    super(game, "Updraft", "Fifth Edition", "5ED");
  }
}

module.exports = Updraft;
