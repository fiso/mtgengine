"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AysenBureaucrats extends UnimplementedCard {
  constructor (game) {
    super(game, "Aysen Bureaucrats", "Masters Edition II", "ME2");
  }
}

module.exports = AysenBureaucrats;
