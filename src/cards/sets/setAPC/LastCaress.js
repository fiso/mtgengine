"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastCaress extends UnimplementedCard {
  constructor(game) {
    super(game, "Last Caress", "Apocalypse", "APC");
  }
}

module.exports = LastCaress;
