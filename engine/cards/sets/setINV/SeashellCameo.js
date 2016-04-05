"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeashellCameo extends UnimplementedCard {
  constructor(game) {
    super(game, "Seashell Cameo", "Invasion", "INV");
  }
}

module.exports = SeashellCameo;
