"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StensiaInnkeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Stensia Innkeeper", "Eldritch Moon", "EMN");
  }
}

module.exports = StensiaInnkeeper;
