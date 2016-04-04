"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasAvenger extends UnimplementedCard {
  constructor(game) {
    super(game, "Urza's Avenger", "Antiquities", "ATQ");
  }
}

module.exports = UrzasAvenger;
