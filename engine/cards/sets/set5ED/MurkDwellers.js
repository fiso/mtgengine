"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurkDwellers extends UnimplementedCard {
  constructor(game) {
    super(game, "Murk Dwellers", "Fifth Edition", "5ED");
  }
}

module.exports = MurkDwellers;
