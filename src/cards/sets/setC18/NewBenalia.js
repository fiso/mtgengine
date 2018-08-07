"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NewBenalia extends UnimplementedCard {
  constructor (game) {
    super(game, "New Benalia", "Commander 2018", "C18");
  }
}

module.exports = NewBenalia;
