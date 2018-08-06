"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoldarenPariah extends UnimplementedCard {
  constructor (game) {
    super(game, "Voldaren Pariah", "Eldritch Moon", "EMN");
  }
}

module.exports = VoldarenPariah;
