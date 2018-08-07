"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiendBinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiend Binder", "Eldritch Moon", "EMN");
  }
}

module.exports = FiendBinder;
