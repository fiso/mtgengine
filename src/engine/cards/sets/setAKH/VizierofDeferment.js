"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VizierofDeferment extends UnimplementedCard {
  constructor (game) {
    super(game, "Vizier of Deferment", "Amonkhet", "AKH");
  }
}

module.exports = VizierofDeferment;
