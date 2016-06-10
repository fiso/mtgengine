"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AysenBureaucrats extends UnimplementedCard {
  constructor (game) {
    super(game, "Aysen Bureaucrats", "Fifth Edition", "5ED");
  }
}

module.exports = AysenBureaucrats;
