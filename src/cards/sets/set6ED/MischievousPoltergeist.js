"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MischievousPoltergeist extends UnimplementedCard {
  constructor(game) {
    super(game, "Mischievous Poltergeist", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MischievousPoltergeist;
