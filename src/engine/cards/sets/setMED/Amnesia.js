"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Amnesia extends UnimplementedCard {
  constructor (game) {
    super(game, "Amnesia", "Masters Edition", "MED");
  }
}

module.exports = Amnesia;
