"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthbind extends UnimplementedCard {
  constructor(game) {
    super(game, "Earthbind", "Collector's Edition", "CED");
  }
}

module.exports = Earthbind;
