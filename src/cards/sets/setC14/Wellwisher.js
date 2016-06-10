"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wellwisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Wellwisher", "Commander 2014", "C14");
  }
}

module.exports = Wellwisher;
