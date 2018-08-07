"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmrakulsEvangel extends UnimplementedCard {
  constructor (game) {
    super(game, "Emrakul's Evangel", "Eldritch Moon", "EMN");
  }
}

module.exports = EmrakulsEvangel;
