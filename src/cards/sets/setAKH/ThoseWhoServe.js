"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThoseWhoServe extends UnimplementedCard {
  constructor (game) {
    super(game, "Those Who Serve", "Amonkhet", "AKH");
  }
}

module.exports = ThoseWhoServe;
