"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandofSilumgar extends UnimplementedCard {
  constructor (game) {
    super(game, "Hand of Silumgar", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HandofSilumgar;
