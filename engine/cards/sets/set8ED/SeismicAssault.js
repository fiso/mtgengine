"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicAssault extends UnimplementedCard {
  constructor(game) {
    super(game, "Seismic Assault", "Eighth Edition", "8ED");
  }
}

module.exports = SeismicAssault;
