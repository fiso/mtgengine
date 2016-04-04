"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LabRats extends UnimplementedCard {
  constructor(game) {
    super(game, "Lab Rats", "Stronghold", "STH");
  }
}

module.exports = LabRats;
