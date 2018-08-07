"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncagetheMenagerie extends UnimplementedCard {
  constructor (game) {
    super(game, "Uncage the Menagerie", "Hour of Devastation", "HOU");
  }
}

module.exports = UncagetheMenagerie;
