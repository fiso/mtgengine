"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamProwler extends UnimplementedCard {
  constructor(game) {
    super(game, "Dream Prowler", "Ninth Edition", "9ED");
  }
}

module.exports = DreamProwler;
