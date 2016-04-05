"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChancelloroftheDross extends UnimplementedCard {
  constructor(game) {
    super(game, "Chancellor of the Dross", "New Phyrexia", "NPH");
  }
}

module.exports = ChancelloroftheDross;
