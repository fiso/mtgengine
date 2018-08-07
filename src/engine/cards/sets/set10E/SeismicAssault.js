"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Seismic Assault", "Tenth Edition", "10E");
  }
}

module.exports = SeismicAssault;
