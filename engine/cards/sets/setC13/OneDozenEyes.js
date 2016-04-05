"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OneDozenEyes extends UnimplementedCard {
  constructor(game) {
    super(game, "One Dozen Eyes", "Commander 2013 Edition", "C13");
  }
}

module.exports = OneDozenEyes;
