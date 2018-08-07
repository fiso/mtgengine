"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Griselbrand extends UnimplementedCard {
  constructor (game) {
    super(game, "Griselbrand", "Modern Masters 2017", "MM3");
  }
}

module.exports = Griselbrand;
